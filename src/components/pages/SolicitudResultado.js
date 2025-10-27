import React from "react";
import "./SolicitudResultado.css";
import imgCocoResultadoGral from "../../images/Coco_resultadogeneral_septiembre.png";
import imgCocoRechazada from "../../images/coco-rechazado.png";
import imgCocoError from "../../images/coco-rechazado.png";
import imgCocoProcesada from "../../images/Coco_resultado-sorprendido.png";
import imgWhatsapp from "../../images/whatsapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

export default function SolicitudResultado({ resultado }) {

  function callByPhone() {
    document.getElementById("click2call_callbtn").click();
  }

  return (
    <>
      {resultado === "preaprobado" && (
        <div className="pre-aprobado">
          <div className="pre-aprobado-first-section">
            <div className="pre-aprobado-left-box">
              <p className="pre-aprobado-label">Préstamo pre-aprobado</p>
              <p className="pre-aprobado-text">
                <b>
                  Por favor envianos a consultas@credlap.com la siguiente documentación para finalizar tu préstamo:
                </b>
              </p>
              <p className="pre-aprobado-text">  
              - DNI frente y dorso
              </p>
              <p className="pre-aprobado-text">  
              - Selfie sosteniendo tu DNI, te dejamos un <a target="_blank" rel="noopener noreferrer" href="https://workdrive.zohoexternal.com/external/29b4e2c67fae1d09c1b50938e5b99aa465997df7de86fa97afd3f555cc3a20e6 ">tutorial</a>
              </p>
              <p className="pre-aprobado-text">  
              - Comprobante de ingresos
              </p>
              <p className="pre-aprobado-text">  
              - En el cuerpo del mail debes agregar apellido, nombre y número de WhatsApp
              </p>
              <p className="pre-aprobado-text">  
              <b>Importante</b>: la documentación debe ser clara y legible, tu documentación y datos personales están protegidos por Credlap SA, bajo el registro de datos personales del BCRA, en el pie de página encontrarás nuestro código del BCRA.
              </p>
              <p className="pre-aprobado-text">
                <b>Hacé clic en el botón verde para enviarnos un WhatsApp y poder agendarnos, vas a ver que contamos con el tilde de verificación de META.</b>
              </p>
              <a href="https://wa.me/542215462961" target="_blank" rel="noopener noreferrer">
                <button className="wsp-btn">WhatsApp</button>
              </a>
              <p className="pre-aprobado-text">
                <br />
                <p>
                 Si no podés acceder desde el botón, comunícate por WhatsApp al número +542215462961
                </p>
                <br />
              </p>
              <p className="pre-aprobado-text">
                <b>
                 Tu préstamo quedará acreditado dentro de las 24 hs. de la aceptación de firma.
                </b> 
              </p>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoResultadoGral} className="paga-img" />
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
                  // esto esconde el botón de wsp
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
                    <img src={imgWhatsapp} className="contacto-consulta-img" />
                    0810-220-0570
                  </button>
                </div>
              </div>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoRechazada} className="paga-img" />
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
              <img src={imgCocoProcesada} className="paga-img" />
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
                  //esto apaga el botón de wsp
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
                    <img src={imgWhatsapp} className="contacto-consulta-img" />
                    0810-220-0570
                  </button>
                </div>
              </div>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoResultadoGral} className="paga-img" />
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
              Por el momento no estamos otorgando préstamos a <b>beneficiarios</b> de <b>ANSES</b>.
              </p>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoResultadoGral} className="paga-img" />
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
                    <img src={imgWhatsapp} className="contacto-consulta-img" />
                    0810-220-0570
                  </button>
                </div>
              </div>
            </div>
            <div className="paga-right-box">
              <img src={imgCocoError} className="paga-img" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
