import React, { useEffect } from "react";
import "./SolicitudResultado.css";
import imgCocoResultadoGral from "../../images/Coco_resultadogeneral_septiembre.png";
import imgCocoRechazada from "../../images/coco-rechazado.png";
import imgCocoError from "../../images/credlap-coco-solicitud-erronea.png";
import imgWhatsapp from "../../images/whatsapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function SolicitudResultado({ resultado }) {
  useEffect(() => {
    if (resultado != "error") {
      insertChatBot(
        "https://go.botmaker.com/rest/webchat/p/CN8ABWDDLS/init.js"
      );
    } else {
      insertChatBot(
        "https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js"
      );
    }
    return () => {
      deleteChatBot();
    };
  }, []);

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
                ¡Genial! ya tenés tu <b>préstamo</b> pre-aprobado, te va a
                contactar un asesor para terminar.
              </p>
              <p className="pre-aprobado-horarios">
                <br />
                <p>
                  <b>TIP:</b>
                  <i>
                    {" "}
                    para hacer más rápido el proceso, tené a mano tu <b>
                      DNI
                    </b>{" "}
                    y tu <b>Comprobante de ingresos.</b>
                  </i>
                </p>
                <br />
                <FontAwesomeIcon icon={solid("clock")} /> Acordate que nuestro
                horario de atención es de lunes a viernes de 10 a 17 hs, sábados
                y feriados de 09:30 a 13 hs.
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
                <b>WhatsApp:</b> 11 4563 0828 / 11 4563 9747
              </p>
              <p className="pre-aprobado-text">11 4563 8718 / 11 4563 2964</p>
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
              <img src={imgCocoError} className="paga-img" />
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
              <p className="pre-aprobado-text">
                Volvé a intentarlo o escribinos por
              </p>
              <p className="pre-aprobado-text">
                <b>WhatsApp:</b> 11 4563 0828 / 11 4563 9747{" "}
              </p>
              <p className="pre-aprobado-text"> 11 4563 2964 / 11 4563 8718 </p>
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
