import React, { useEffect, useRef, useState } from "react";
import "./Nosotros.css";
import imgCocoNosotros from "../../images/coco-nosotros.png";
import imgCheck1 from "../../images/check-1.png";
import imgNosotros1 from "../../images/nosotros-1.png";
import imgNosotros2 from "../../images/nosotros-2.png";
import imgNosotros3 from "../../images/icono-redes-nosotros.png";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";
import FormButton from "../FormButton";
import { sendMail, sendMailWithAttachment } from "../../services/EmailService";
import { Link } from "react-router-dom";
//import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function Nosotros() {
  //cambio de direccion a la que se manda el cv
  window.cv.mail = "administracion@credlap.com";
  let fileInput = useRef();
  const [formValido, setFormValido] = useState(false);
  const [selectedFilename, setSelectedFilename] = useState(null);
  const [estadoActual, setEstadoActual] = useState(null);
  const [formTrabaja, setformTrabaja] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    validaciones: {},
  });

  useEffect(() => {
    checkFormValido();
  }, [formTrabaja]);

  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);

  function checkFormValido() {
    setFormValido(
      formTrabaja.nombre &&
        !formTrabaja.validaciones.nombre &&
        formTrabaja.email &&
        !formTrabaja.validaciones.email &&
        formTrabaja.mensaje &&
        !formTrabaja.validaciones.mensaje
    );
  }

  function handleEmailChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "Email obligatorio";
    else {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(event.target.value)) mensaje = "Email inválido";
    }
    setformTrabaja((prevForm) => ({
      ...prevForm,
      email: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        email: mensaje,
      },
    }));
  }

  function handleNombreChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "Nombre/Apellido obligatorio";

    setformTrabaja((prevForm) => ({
      ...prevForm,
      nombre: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        nombre: mensaje,
      },
    }));
  }

  function handleMensajeChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "El mensaje es obligatorio";

    setformTrabaja((prevForm) => ({
      ...prevForm,
      mensaje: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        mensaje: mensaje,
      },
    }));
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (formValido) {
      if (fileInput.files && fileInput.files.length === 0)
        sendMail(
          formTrabaja.email,
          window.cv.mail,
          {
            "Nombre y Apellido": formTrabaja.nombre,
            Email: formTrabaja.email,
            Mensaje: formTrabaja.mensaje,
          },
          "Dejá tu CV / Trabajá con nosotros",
          window.location.href,
          sendMailCallback
        );
      else
        sendMailWithAttachment(
          formTrabaja.email,
          window.cv.mail,
          {
            "Nombre y Apellido": formTrabaja.nombre,
            Email: formTrabaja.email,
            Mensaje: formTrabaja.mensaje,
          },
          "Dejá tu CV / Trabajá con nosotros",
          window.location.href,
          sendMailCallback,
          fileInput.files[0],
          fileInput.files[0].name
        );
      setEstadoActual("enviando");
    }
  }

  function sendMailCallback(result) {
    setEstadoActual(result.isError ? "error" : "ok");
  }

  return (
    <div className="nosotros">
      <div className="nosotros-first-section">
        <div className="nosotros-left-box">
          <p className="nosotros-label">Misión</p>
          <p className="nosotros-text">
            Somos una financiera con años de experiencia en el rubro, dedicada a
            otorgar préstamos personales de manera rápida y confidencial.
            Innovamos para sostener un sistema que combina la inmediatez de lo
            digital con la calidez de lo personal, priorizando siempre la
            atención hacia nuestros clientes.
          </p>
          <br />
          <p className="nosotros-label">Visión</p>
          <p className="nosotros-text">
            Buscamos la versatilidad para poder adaptarnos al contexto
            socioeconómico y así beneficiar siempre a nuestros clientes.
          </p>
          <p className="nosotros-label">Valores</p>
          <p className="nosotros-text">
            Pretendemos como valores fundamentales, la confianza, atributo que
            consideramos importante tanto en nuestros clientes, como en todo el
            equipo de Credlap; la innovación, implementamos nuevas experiencias
            de trabajo generando un cambio positivo.
          </p>
        </div>
        <div className="nosotros-right-box">
          <img src={imgCocoNosotros} className="nosotros-img" alt="Nosotros" />
        </div>
      </div>
      <div className="nosotros-second-section">
        <p className="nosotros-second-section-label">
          En Credlap, podes confiar
        </p>
        <div className="nosotros-second-section-boxes">
          <div className="nosotros-box-item">
            <img
              src={imgNosotros1}
              alt="100% online"
              className="nosotros-box-item-img"
            />
            <p className="nosotros-box-item-desc">
              Somos 100% online, sólo con tu celular, estés donde estés.
            </p>
          </div>
          <div className="nosotros-box-item">
            <img
              src={imgNosotros2}
              alt="+12.000 clientes"
              className="nosotros-box-item-img"
            />
            <p className="nosotros-box-item-desc">
              +15.000 son los clientes que avalan nuestra seriedad y compromiso.
            </p>
          </div>
          <div className="nosotros-box-item">
            <img
              src={imgNosotros3}
              alt="+10000 seguidores"
              className="nosotros-box-item-img-3"
            />
            <p className="nosotros-box-item-desc">
              +15.000 son las personas que nos siguen en redes.
              <br />
              <Link
                to={"//maslinks.com/Credlap"}
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                ¡SUMATE ACÁ!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div id="cv" className="nosotros-third-section">
        <div className="nosotros-third-left-box">
          <p className="nosotros-titulo">Sumate a nuestro equipo</p>
          <p className="nosotros-form-desc">
            Si deseas aprender, crecer laboralmente y sumar experiencia en un
            excelente ambiente laboral.
          </p>
          <br />
          <p className="nosotros-form-desc">Si posees:</p>
          <div className="nosotros-third-section-boxes">
            <p className="nosotros-third-section-item">
              <img
                src={imgCheck1}
                className="nosotros-third-section-item-img"
                alt="Habilidades"
              />
              Habilidades de comunicación, verbal y escritas
            </p>
            <p className="nosotros-third-section-item">
              <img
                src={imgCheck1}
                className="nosotros-third-section-item-img"
                alt="Multiples sistemas"
              />
              Navegar múltiples sistemas, programas y pantallas al mismo tiempo
            </p>
          </div>
          <br />
          <p className="nosotros-form-desc">
            ¡Credlap es tu nueva oportunidad!
          </p>
        </div>
        <div className="nosotros-third-right-box">
          {!estadoActual && (
            <form className="form-nosotros">
              <FormInput
                placeholder="Nombre y Apellido"
                className="nosotros-form-input-container"
                maxLength={50}
                value={formTrabaja.nombre}
                onChange={handleNombreChange}
                validation={formTrabaja.validaciones.nombre}
              />
              <FormInput
                placeholder="E-mail"
                className="nosotros-form-input-container"
                type="email"
                value={formTrabaja.email}
                onChange={handleEmailChange}
                validation={formTrabaja.validaciones.email}
                maxLength={100}
              />
              <FormTextArea
                placeholder="Dejanos una breve descripción..."
                rows={7}
                value={formTrabaja.mensaje}
                onChange={handleMensajeChange}
                validation={formTrabaja.validaciones.mensaje}
              />
              <input
                ref={(input) => (fileInput = input)}
                type="file"
                style={{ width: "0px", height: "0px", visibility: "hidden" }}
                onChange={(e) => {
                  e.target.files && e.target.files.length > 0
                    ? setSelectedFilename(e.target.files[0].name)
                    : setSelectedFilename(null);
                }}
              />
              <div className="form-group-button-container">
                <div>
                  <FormButton
                    label="ADJUNTAR"
                    className="nosotros-button-container adjuntar"
                    onClick={(e) => {
                      e.preventDefault();
                      fileInput.click();
                    }}
                  />
                  {selectedFilename && (
                    <div
                      style={{
                        textAlign: "center",
                        margin: "0px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <label>.../{selectedFilename}</label>
                    </div>
                  )}
                </div>
                <FormButton
                  label="ENVIAR"
                  className="nosotros-button-container"
                  disabled={!formValido}
                  onClick={onFormSubmit}
                />
              </div>
            </form>
          )}
          {estadoActual === "enviando" && (
            <div className="baja-enviando">Enviando mensaje...</div>
          )}
          {estadoActual === "error" && (
            <div className="baja-enviando">
              Ocurrió un error al enviar el mensaje.
            </div>
          )}
          {estadoActual === "ok" && (
            <div className="baja-enviando">¡Tu mensaje ha sido enviado!</div>
          )}
        </div>
      </div>
    </div>
  );
}
