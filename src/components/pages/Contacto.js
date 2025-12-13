import React, { useEffect, useState } from "react";
import "./Contacto.css";
import imgReloj from "../../images/reloj.png";
import imgEmail from "../../images/Contacto-mail.png";
import imgChat from "../../images/Icono-chat.png";
import imgTel from "../../images/icono-telefono.png";
import imgContac from "../../images/coco-contacto.png";
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
          <div className="contacto-horario">
            {/* CHATEÁ */}
            <div className="contacto-item-container">
              <img src={imgChat} className="contacto-item-img" />
              <div className="contacto-item-content">
                <p className="contacto-item-titulo">Chateá</p>
                <p className="contacto-item-subtitulo">Disponibles las 24 horas</p>
              </div>
            </div>

            {/* LLAMANOS */}
            <div className="contacto-item-container">
              <img src={imgTel} className="contacto-item-img" />
              <div className="contacto-item-content">
                <p className="contacto-item-titulo">Llamanos</p>
                <p className="contacto-item-subtitulo">0810-220-0570</p>
              </div>
            </div>

            {/* CONSULTANOS */}
            <div className="contacto-item-container">
              <img src={imgEmail} className="contacto-item-img" />
              <div className="contacto-item-content">
                <p className="contacto-item-titulo">Consultanos</p>
                <p className="contacto-item-subtitulo">consultas@credlap.com</p>
              </div>
            </div>

            {/* HORARIOS */}
            <div className="contacto-item-container">
              <img src={imgReloj} className="contacto-item-img" />
              <div className="contacto-item-content">
                <p className="contacto-item-titulo">Horarios</p>
                <div className="contacto-horarios-row">
                  <span className="contacto-horarios-dia">Lunes a Viernes</span>
                  <span className="contacto-horarios-hora">09:30hs - 16:00hs</span>
                </div>
                <div className="contacto-horarios-row">
                  <span className="contacto-horarios-dia">Feriados</span>
                  <span className="contacto-horarios-hora">09:30hs - 13:30hs</span>
                </div>
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
          <div className="contacto-rigth-box-content">
          <p className="contacto-titulo">Contactanos</p>
          <p className="contacto-subtitulo">Estamos listos para ayudarte con tus consultas y gestiones.</p>
          <img src={imgContac} className="contacto-img-coco" />
          </div>
          {/* <Link
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
          </Link> */}
        </div>
      </div>
    </div>
  );
}
