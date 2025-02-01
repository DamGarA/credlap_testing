import React, { useEffect, useState } from "react";
import "./Contacto.css";
import imgReloj from "../../images/reloj.png";
import imgWhatsapp from "../../images/whatsapp.png";
import imgTel from "../../images/icono-telefono.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
//import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function Contacto() {
  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);

  return (
    <div className="contacto">
      <div className="contacto-first-section">
        <div className="contacto-left-box">
          <p className="contacto-titulo">Contactanos</p>
          <div className="contacto-horario">
            <div className="telefono-titulo-container">
              <img src={imgTel} className="telefono-img-reloj" />
              <p className="telefono-label-horarios">Llamanos</p>
            </div>
            <div className="telefono-container">
              <div className="telefono">
                <p className="telefono-texto">Teléfono:</p>
                <p className="telefono-hora">0810-220-0570</p>
              </div>
            </div>
            <div className="contacto-titulo-container">
              <img src={imgReloj} className="contacto-img-reloj" />
              <p className="contacto-label-horarios">Horarios</p>
            </div>
            <div className="contacto-dias-container">
              <div className="contacto-dias">
                <p className="contacto-dias-texto">Lunes a Viernes</p>
                <p className="contacto-dias-hora">09:30hs - 16:00hs</p>
              </div>
              <div className="contacto-dias">
                <p className="contacto-dias-texto">Sábados y feriados</p>
                <p className="contacto-dias-hora">09:30hs - 13:00hs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contacto-right-box">
          <div hidden>
            <Link
              to={"//api.whatsapp.com/send?phone=" + window.contacto.wsp}
              className="contacto-btn hablar"
              target={"_blank"}
            >
              <FontAwesomeIcon
                icon={brands("whatsapp")}
                className="contacto-btn-icon"
              />
              Hablar
            </Link>
          </div>
          <Link
            to={"//www.facebook.com/credlap/"}
            className="contacto-btn facebook"
            target={"_blank"}
          >
            <FontAwesomeIcon
              icon={brands("facebook-f")}
              className="contacto-btn-icon"
            />
            Facebook
          </Link>
          <Link
            to={"https://www.instagram.com/credlap.ok/"}
            className="contacto-btn instagram"
            target={"_blank"}
          >
            <FontAwesomeIcon
              icon={brands("instagram")}
              className="contacto-btn-icon"
            />
            Instagram
          </Link>
          <Link
            to={"//twitter.com/Credlapoficial"}
            className="contacto-btn twitter"
            target={"_blank"}
          >
            <FontAwesomeIcon
              icon={brands("x-twitter")}
              className="contacto-btn-icon"
            />
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
}
