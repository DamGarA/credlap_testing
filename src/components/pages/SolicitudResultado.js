import React, { useState, useRef, useEffect, useCallback } from "react";
import "./SolicitudResultado.css";
import imgCocoResultadoGral from "../../images/Coco_resultadogeneral_septiembre.png";
import imgCocoRechazada from "../../images/coco-rechazado.png";
import imgCocoError from "../../images/coco-rechazado.png";
import imgCocoProcesada from "../../images/Coco_resultado-sorprendido.png";
import imgWhatsapp from "../../images/whatsapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { generatePdfBlob } from "../../services/PdfGenerationService";
import { sendMailWithAttachment } from "../../services/EmailService";
import { CREDLAP_EMAIL } from "../../Config";

// Estados del flujo de firma
const SIGNING_STATES = {
  IDLE: "idle",               // Esperando que el usuario inicie
  SIGNING: "signing",         // Pad de firma visible, usuario firmando
  GENERATING: "generating",   // Generando PDF con firma
  SENDING: "sending",         // Enviando emails
  COMPLETED: "completed",     // Todo OK
  ERROR: "error",             // Error en algún paso
};

export default function SolicitudResultado({ resultado }) {
  const [signingState, setSigningState] = useState(SIGNING_STATES.IDLE);
  const [formData, setFormData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [signedPdfBlob, setSignedPdfBlob] = useState(null);
  const sigCanvasRef = useRef(null);

  // Recuperar datos del formulario de sessionStorage
  useEffect(() => {
    if (resultado === "preaprobado") {
      const stored = sessionStorage.getItem("credlap_formData");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setFormData(parsed);
        } catch (e) {
          console.error("❌ [SolicitudResultado] Error parseando formData de sessionStorage:", e);
        }
      } else {
        console.warn('⚠️  [SolicitudResultado] sessionStorage vacío para credlap_formData');
      }
    }
  }, [resultado]);

  // Limpiar blob URL al desmontar
  useEffect(() => {
    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
    };
  }, [pdfBlobUrl]);

  function callByPhone() {
    document.getElementById("click2call_callbtn").click();
  }

  // Iniciar flujo de firma
  const handleStartSigning = useCallback(() => {
    setSigningState(SIGNING_STATES.SIGNING);
  }, []);

  // Limpiar el pad de firma
  const handleClearSignature = useCallback(() => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
    }
  }, []);

  // Confirmar firma y generar PDF
  const handleConfirmSignature = useCallback(async () => {
    if (!sigCanvasRef.current || sigCanvasRef.current.isEmpty()) {
      setErrorMsg("Por favor, dibujá tu firma antes de confirmar.");
      return;
    }

    if (!formData) {
      setErrorMsg("No se encontraron los datos del formulario. Por favor, realizá la solicitud nuevamente.");
      setSigningState(SIGNING_STATES.ERROR);
      return;
    }

    setErrorMsg("");
    setSigningState(SIGNING_STATES.GENERATING);

    try {
      // Obtener firma como PNG data URL
      
      let signatureDataUrl;
      
      // Intentar diferentes métodos para acceder al canvas
      if (sigCanvasRef.current.canvasProps?.ref?.current) {
        signatureDataUrl = sigCanvasRef.current.canvasProps.ref.current.toDataURL("image/png");
      } else if (sigCanvasRef.current._canvas) {
        signatureDataUrl = sigCanvasRef.current._canvas.toDataURL("image/png");
      } else if (sigCanvasRef.current.canvasRef?.current) {
        signatureDataUrl = sigCanvasRef.current.canvasRef.current.toDataURL("image/png");
      } else if (sigCanvasRef.current.getCanvas) {
        signatureDataUrl = sigCanvasRef.current.getCanvas().toDataURL("image/png");
      } else {
        // Último recurso - buscar el primer canvas en el DOM
        const canvas = document.querySelector('canvas');
        if (!canvas) {
          throw new Error('No se encontró el elemento canvas de firma en el DOM');
        }
        signatureDataUrl = canvas.toDataURL("image/png");
      }
      

      // Generar PDF con la firma embebida
      const pdfBlob = await generatePdfBlob(formData, signatureDataUrl);
      setSignedPdfBlob(pdfBlob);

      // Crear URL para preview/descarga
      const blobUrl = URL.createObjectURL(pdfBlob);
      setPdfBlobUrl(blobUrl);

      // Enviar emails
      setSigningState(SIGNING_STATES.SENDING);

      const userName = `${formData.nombre} ${formData.apellido}`;
      const userEmail = formData.email;
      const fileName = `Autorizacion_Prestamo_${formData.dni}_${Date.now()}.pdf`;

      // Convertir blob a File para el servicio de email existente
      const pdfFile = new File([pdfBlob], fileName, { type: "application/pdf" });

      // Datos del email
      const emailData = {
        Nombre: userName,
        DNI: formData.dni,
        Email: userEmail,
        Telefono: formData.telefono,
        Monto: `$${Number(formData.monto).toLocaleString("es-AR")}`,
        Provincia: formData.provincia,
        "Entidad Bancaria": formData.entidadBancaria,
        Estado: "Documento de autorización firmado digitalmente",
      };

      // Enviar email a Credlap con el PDF adjunto
      await new Promise((resolve, reject) => {
        sendMailWithAttachment(
          userEmail,
          CREDLAP_EMAIL,
          { ...emailData },
          "Autorización de Préstamo Firmada",
          window.location.href,
          (res) => {
            if (res.isError) reject(new Error(res.result || "Error enviando a Credlap"));
            else resolve(res);
          },
          pdfFile,
          fileName
        );
      });

      // Enviar copia al usuario
      await new Promise((resolve, reject) => {
        sendMailWithAttachment(
          "consultas@credlap.com",
          userEmail,
          { ...emailData },
          "Tu Autorización de Préstamo - Credlap",
          window.location.href,
          (res) => {
            if (res.isError) reject(new Error(res.result || "Error enviando al usuario"));
            else resolve(res);
          },
          pdfFile,
          fileName
        );
      });

      // Limpiar sessionStorage
      sessionStorage.removeItem("credlap_formData");
      setSigningState(SIGNING_STATES.COMPLETED);
    } catch (error) {
      console.error("Error en flujo de firma:", error);
      setErrorMsg(
        error.message || "Ocurrió un error. Por favor, intentá nuevamente."
      );
      setSigningState(SIGNING_STATES.ERROR);
    }
  }, [formData]);

  // Reintentar tras error
  const handleRetry = useCallback(() => {
    setErrorMsg("");
    setSigningState(SIGNING_STATES.SIGNING);
  }, []);

  // Descargar PDF firmado
  const handleDownloadPdf = useCallback(() => {
    if (pdfBlobUrl && formData) {
      const link = document.createElement("a");
      link.href = pdfBlobUrl;
      link.download = `Autorizacion_Prestamo_${formData.dni}.pdf`;
      link.click();
    }
  }, [pdfBlobUrl, formData]);



  return (
    <>
      {resultado === "preaprobado" && (
        <div className="pre-aprobado">
          <div className="pre-aprobado-first-section">
            <div className="pre-aprobado-left-box">
              <p className="pre-aprobado-label">Préstamo pre-aprobado</p>
              <p className="pre-aprobado-text">
                <b>
                  ¡Felicitaciones! Tu préstamo fue pre-aprobado. Para continuar,
                  firmá digitalmente el documento de autorización que te enviamos por email.
                </b>
              </p>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoResultadoGral} className="paga-img" alt="Resultado" />
            </div>
          </div>
        </div>
      )}
      {resultado === "rechazado" && (
        <div className="pre-aprobado">
          <div className="pre-aprobado-first-section">
            <div className="pre-aprobado-left-box">
              <p className="pre-aprobado-label">Solicitud rechazada</p>
              <p className="pre-aprobado-text">
                <b>Tu préstamo fue rechazado.</b> No califica a nuestras
                evaluaciones, ingresá <b>a nuestro chat</b> y enterate cuales
                son.
              </p>
              <div className="pre-aprobado-links">
                <div hidden>
                  {" "}
                  {/* esto esconde el botón de wsp */}
                  <Link
                    to={
                      "//api.whatsapp.com/send?phone=" +
                      window.resultado.botonwsp
                    }
                    className="pre-aprobado-btn hablar"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon
                      icon={brands("whatsapp")}
                      className="contacto-btn-icon"
                    />
                    Hablar
                  </Link>
                </div>
                <div hidden>
                  <button
                    onClick={callByPhone}
                    className="pre-aprobado-consulta"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img src={imgWhatsapp} className="contacto-consulta-img" alt="WhatsApp" />
                    0810-220-0570
                  </button>
                </div>
              </div>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoRechazada} className="paga-img" alt="Rechazada" />
            </div>
          </div>
        </div>
      )}
      {resultado === "procesada" && (
        <div className="pre-aprobado">
          <div className="pre-aprobado-first-section">
            <div className="pre-aprobado-left-box">
              <p className="pre-aprobado-label">Solicitud vigente</p>
              <p className="pre-aprobado-text">
                Tu solicitud ya está procesada en nuestro sistema. No es
                necesario que vuelvas a ingresarla.
              </p>
              <p className="pre-aprobado-text">
                Si fue <b>aprobada</b>, te va a contactar un asesor para
                terminar.
              </p>
              <p className="pre-aprobado-text">
                Si fue <b>rechazada</b>, es debido a tu situación crediticia.
                Podés volver a probar cuando la <b>regularices.</b>
              </p>
              <p className="pre-aprobado-text">
                Para más información contactate al 0810-220-0570 o chateá con
                nosotros.
              </p>

              <div hidden>
                <Link
                  to={
                    "//api.whatsapp.com/send?phone=" + window.resultado.botonwsp
                  }
                  className="pre-aprobado-btn hablar"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    icon={brands("whatsapp")}
                    className="contacto-btn-icon"
                  />
                  Hablar
                </Link>
              </div>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoProcesada} className="paga-img" alt="Procesada" />
            </div>
          </div>
        </div>
      )}
      {resultado === "sin-ingresos" && (
        <div className="pre-aprobado">
          <div className="pre-aprobado-first-section">
            <div className="pre-aprobado-left-box">
              <p className="pre-aprobado-label">¡Ups!</p>
              <p className="pre-aprobado-text">
                No tenés ingresos demostrables. No tenemos un préstamo para
                ofrecerte.
              </p>
              <div className="pre-aprobado-links">
                <div hidden>
                  {" "}
                  {/*esto apaga el botón de wsp*/}
                  <Link
                    to={
                      "//api.whatsapp.com/send?phone=" +
                      window.resultado.botonwsp
                    }
                    className="pre-aprobado-btn hablar"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon
                      icon={brands("whatsapp")}
                      className="contacto-btn-icon"
                    />
                    Hablar
                  </Link>
                </div>
                <div hidden>
                  <button
                    onClick={callByPhone}
                    className="pre-aprobado-consulta"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img src={imgWhatsapp} className="contacto-consulta-img" alt="WhatsApp" />
                    0810-220-0570
                  </button>
                </div>
              </div>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoResultadoGral} className="paga-img" alt="Sin ingresos" />
            </div>
          </div>
        </div>
      )}
      {resultado === "anses" && (
        <div className="pre-aprobado">
          <div className="pre-aprobado-first-section">
            <div className="pre-aprobado-left-box">
              <p className="pre-aprobado-label">¡Ups!</p>
              <p className="pre-aprobado-text">
                Por el momento no estamos otorgando préstamos a{" "}
                <b>beneficiarios</b> de <b>ANSES</b>.
              </p>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoResultadoGral} className="paga-img" alt="ANSES" />
            </div>
          </div>
        </div>
      )}
      {resultado === "error" && (
        <div className="pre-aprobado">
          <div className="pre-aprobado-first-section">
            <div className="pre-aprobado-left-box">
              <p className="pre-aprobado-label">
                Tenemos un problema en nuestros servidores.
              </p>
              <p className="pre-aprobado-text">Volvé a intentarlo.</p>
              <p className="pre-aprobado-text">
                Si necesitás ayuda contactate al 0810-220-0570 o chateá con
                nosotros.
              </p>
              <div className="pre-aprobado-links">
                <div hidden>
                  <Link
                    to={
                      "//api.whatsapp.com/send?phone=" +
                      window.resultado.botonwsp
                    }
                    className="pre-aprobado-btn hablar"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon
                      icon={brands("whatsapp")}
                      className="contacto-btn-icon"
                    />
                    Hablar
                  </Link>
                </div>
                <div hidden>
                  <button
                    onClick={callByPhone}
                    className="pre-aprobado-consulta"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img src={imgWhatsapp} className="contacto-consulta-img" alt="WhatsApp" />
                    0810-220-0570
                  </button>
                </div>
              </div>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoError} className="paga-img" alt="Error" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
