import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imgUsuariosFinancieros from "../../images/usuarios-financieros-gob.png";
import "./InfoUsuario.css";
//import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function InfoAlUsuario() {
  //variables de los datos: window.infousuario. ----> titular
  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);
  return (
    <div className="info-usuario">
      <div className="info-usuario-first-section">
        <p className="info-usuario-label">Información al usuario financiero</p>
        <p className="info-usuario-text">
          Te invitamos a ver un video del Banco Central de la República
          Argentina con información relevante para todo aquel que opera en el
          sistema financiero.
        </p>
        <div className="info-usuario-video-container">
          <iframe
            className="info-usuario-video"
            src="https://www.youtube.com/embed/kE-209lfc_o"
            title="Usuarios financieros"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="info-usuario-responsables-titulo">
          Responsables de atención al usuario de servicios financieros
        </p>
        <ul className="info-usuario-responsables-info">
          <li>
            <b>· Titular:</b> Lina Ortega
          </li>
          <li>
            <b>· Suplente:</b> {window.infousuario.suplente}
          </li>
          <li>
            <b>· Teléfono de contacto:</b> 0810-220-0570
          </li>
          <li>
            <b>· Mail de atención:</b> administracion@credlap.com
          </li>
          <li>
            <b>· Whatsapp:</b> 11-7831-2678
          </li>
        </ul>
      </div>
      <div className="info-usuario-second-section">
        <div className="info-usuario-left-box">
          <Link
            to={"//www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"}
            target="_blank"
          >
            <img
              src={imgUsuariosFinancieros}
              className="info-usuario-img"
              alt="Usuarios financieros"
            />
          </Link>
          <Link
            to={
              "//workdrive.zohoexternal.com/external/f3e424cc61d8484d305cd17d1c0a0fe3e17affda3c46065af498398db6abd366"
            }
            className="info-usuario-link"
            target={"_blank"}
          >
            INTERESES VIGENTES
          </Link>
        </div>
        <div className="info-usuario-right-box">
          <p>
            Los reclamos de los usuarios deberán resolverse en un plazo máximo
            de 10 días hábiles y ante la falta de respuesta o disconformidad con
            la misma los usuarios podrán efectuar una denuncia ante el BCRA
            ingresando a:{" "}
            <span className="info-usuario-span">
              <Link
                to="//www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
                target={"_blank"}
              >
                www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp
              </Link>
            </span>
            , mediante correo electrónico dirigido a:{" "}
            <span className="info-usuario-span">
              <Link
                to="mailto:proteccionalusuario@bcra.gob.ar"
                target={"_blank"}
              >
                proteccionalusuario@bcra.gob.ar
              </Link>
            </span>{" "}
            y/o a través de{" "}
            <span className="info-usuario-span">
              <Link to={"//twitter.com/bcrausuarios?lang=es"} target={"_blank"}>
                @BCRAusuarios
              </Link>
            </span>
          </p>
          <Link
            to={
              "https://workdrive.zoho.com/file/blle6f6d7191bc1f248ccb1b5c4c5f1f5e517"
            }
            className="info-usuario-link"
            target={"_blank"}
          >
            Contrato de adhesión - Ley 24.240 de defensa del consumidor
          </Link>
        </div>
      </div>
    </div>
  );
}
