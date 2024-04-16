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
                ¡Último paso! <b>Envianos un Whatsapp</b> al siguiente número, <b>agendanos</b>, así finalizamos el proceso.
              </p>
              <a href="https://api.whatsapp.com/send?phone=5491125685051">
                <button className="wsapp-btn">
                  <FontAwesomeIcon icon={brands("whatsapp")} />
                  <b>      HABLAR AHORA</b>
                </button>
              </a>
              <p className="pre-aprobado-horarios">
                <br />
                <p>
                  O utiliza este link:
                </p>
                <br />
                <a href="https://api.whatsapp.com/send?phone=5491125685051" style={{ color: 'white', textDecoration: 'none' }}>
                  <b>
                    https://api.whatsapp.com/send?phone=5491125685051
                  </b>
                </a>
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
              <p className="pre-aprobado-label">Beneficiarios de ANSES</p>
              <p className="pre-aprobado-text">
                No otorgamos préstamos personales a beneficiarios de ANSES{" "}
                <b>no contributivo</b>. Te invitamos a sacarte las dudas en
                nuestro chatbot. Si sos anses contributivo completá el
                formulario nuevamente seleccionando la opción recibo de sueldo.
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
