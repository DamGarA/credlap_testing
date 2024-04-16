import React, { useEffect, useRef, useState } from "react";
import "./DefensaConsumidor.css";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";
import FormButton from "../FormButton";
import { Link } from "react-router-dom";
import { sendMail, sendMailWithAttachment } from "../../services/EmailService";
import reclamo1 from "../../images/reclamo-1.png";
import reclamo2 from "../../images/reclamo-2.png";
import reclamo3 from "../../images/reclamo-3.png";
//import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function DefensaConsumidor() {
  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/6PGD8XS6ER/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);

  /*function callByPhone() {
    document.getElementById('click2call_callbtn').click()
  }*/

  return (
    <div className="defensa-consumidor">
      <div className="defensa-consumidor-first-section">
        <div className="defensa-consumidor-first-section-content">
          <p className="defensa-consumidor-label">Reclamos</p>
          <p className="defensa-consumidor-text">
            Te ayudamos a solucionar tu reclamo: seguí estos pasos en nuestro
            chat y finalizá tu consulta al instante.
          </p>
          <div className="defensa-consumidor-first-section-boxes">
            <div className="defensa-consumidor-box-item">
              <div className="defensa-consumidor-item-step">1</div>
              <img
                src={reclamo1}
                alt="Completá el formulario"
                className="defensa-consumidor-box-item-img"
              />
              <p className="defensa-consumidor-item-title">Abrí nuestro chat</p>
              <p className="defensa-consumidor-item-desc">
                Se encuentra abajo a la derecha.
              </p>
            </div>
            <div className="defensa-consumidor-box-item">
              <div className="defensa-consumidor-item-step">2</div>
              <img
                src={reclamo2}
                alt="Corroboramos tus datos"
                className="defensa-consumidor-box-item-img"
              />
              <p className="defensa-consumidor-item-title">Ingresá tus datos</p>
              <p className="defensa-consumidor-item-desc">
                Luego, debés elegir entre las opciones que te brindamos.
              </p>
            </div>
            <div className="defensa-consumidor-box-item">
              <div className="defensa-consumidor-item-step">3</div>
              <img
                src={reclamo3}
                alt="Te depositamos el dinero"
                className="defensa-consumidor-box-item-img"
              />
              <p className="defensa-consumidor-item-title">
                Finalizaste tu reclamo
              </p>
              <p className="defensa-consumidor-item-desc">
                En caso de que hayas sido derivado, recordá que el tiempo de
                respuesta es de 24 a 48 hs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="defensa-consumidor-second-section">
        <p className="defensa-consumidor-label-2">Defensa al consumidor</p>
        <p className="defensa-consumidor-text-2">
          Tu consulta, reclamo o sugerencia, te la responderemos a partir de su
          recepción dentro de los 10 días hábiles. En caso de falta de respuesta
          y/o disconformidad de éstas, podés informar lo ocurrido al BCRA, por
          cualquiera de sus medios habilitados. Consulta en el siguiente sitio
          web:{" "}
          <span className="defensa-consumidor-span">
            <Link
              to={"//www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"}
              target={"_blank"}
            >
              BCRA: usuarios financieros
            </Link>
          </span>
        </p>
        <div
          className="defensa-consumidor-text-2"
          style={{ marginBottom: "20px" }}
        >
          Te dejamos links útiles para más información
          <div style={{ marginTop: "10px" }}>
            <span className="defensa-consumidor-span">
              <Link
                to="//www.argentina.gob.ar/produccion/defensadelconsumidor"
                target={"_blank"}
              >
                Arg. - Defensa del consumidor
              </Link>
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span className="defensa-consumidor-span">
              <Link
                to={
                  "//www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"
                }
                target={"_blank"}
              >
                Arg. - Defensa del consumidor - Formulario
              </Link>
            </span>
          </div>
        </div>
        <p className="defensa-consumidor-nota">
          • La Ley Nacional N.º 24240 tiene por objeto la defensa del consumidor
          o usuario. Se denomina “consumidor” a la persona física o jurídica que
          adquiere o utiliza, en forma gratuita u onerosa, bienes o servicios
          como destinatario final, en beneficio propio o de su grupo familiar o
          social.
        </p>
        <p className="defensa-consumidor-nota">
          • ¿Cuándo se aplica la ley de defensa del consumidor? Debemos tener en
          cuenta es que esta ley protectoria se aplica cuando existe una
          relación de consumo. ... Hay relación de consumo cuando existe un
          vínculo jurídico entre un consumidor o usuario y un proveedor de
          bienes o servicios.
        </p>
        <p className="defensa-consumidor-nota">
          • ¿Qué puedo exigir como consumidor o consumidora? Información clara y
          gratuita sobre el producto o servicio que voy a comprar o contratar,
          el precio, la forma de pago y las condiciones de salubridad.
        </p>
        <p className="defensa-consumidor-nota">
          La función de la oficina de Defensa del Consumidor, es garantizar que
          se respeten los derechos de todos los habitantes en materia de
          consumo, previstos en la Constitución Nacional y en las Leyes 24.240
          de Defensa del Consumidor
        </p>
      </div>
    </div>
  );
}
