import React, { useEffect, useState } from "react";
import "./Baja.css";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";
import FormButton from "../FormButton";
import { sendMail } from "../../services/EmailService";
//import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function Baja() {
  //Acá se modifican las direcciones de mail a donde van a mandar el formulario de baja
  window.baja.mail = "administracion@credlap.com, cyr@credlap.com";

  const [formValido, setFormValido] = useState(false);
  const [estadoActual, setEstadoActual] = useState(null);
  const [formBaja, setFormBaja] = useState({
    nombre: "",
    cuit: "",
    telefono: "",
    email: "",
    mensaje: "",
    validaciones: {},
  });

  useEffect(() => {
    checkFormValido();
  }, [formBaja]);

  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);

  function checkFormValido() {
    setFormValido(
      formBaja.nombre &&
        !formBaja.validaciones.nombre &&
        formBaja.cuit &&
        !formBaja.validaciones.cuit &&
        formBaja.telefono &&
        !formBaja.validaciones.telefono &&
        formBaja.email &&
        !formBaja.validaciones.email &&
        formBaja.mensaje &&
        !formBaja.validaciones.mensaje
    );
  }

  function handleCUITChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "CUIT/CUIL obligatorio";
    else {
      if (event.target.value.length > 11) return;
      if (event.target.value.length < 8)
        mensaje = "CUIT/CUIL debe tener entre 8 y 11 dígitos";
    }

    setFormBaja((prevForm) => ({
      ...prevForm,
      cuit: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        cuit: mensaje,
      },
    }));
  }

  function handleTelefonoChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "Teléfono/Celular obligatorio";
    else {
      if (event.target.value.length > 10) return;
      if (event.target.value.length < 10)
        mensaje = "Debe tener 10 dígitos: cód. de área + número";
    }

    setFormBaja((prevForm) => ({
      ...prevForm,
      telefono: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        telefono: mensaje,
      },
    }));
  }

  function handleEmailChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "Email es obligatorio";
    else {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(event.target.value)) mensaje = "Email inválido";
    }
    setFormBaja((prevForm) => ({
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
    if (!event.target.value) mensaje = "Nombre/Apellido es obligatorio";

    setFormBaja((prevForm) => ({
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

    setFormBaja((prevForm) => ({
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
      sendMail(
        formBaja.email,
        window.baja.mail,
        {
          "Apellido y Nombre": formBaja.nombre,
          Cuil: formBaja.cuit,
          Teléfono: formBaja.telefono,
          Email: formBaja.email,
          Mensaje: formBaja.mensaje,
        },
        "Baja o arrepentimiento",
        window.location.href,
        sendMailCallback
      );
      setEstadoActual("enviando");
    }
  }

  function sendMailCallback(result) {
    setEstadoActual(result.isError ? "error" : "ok");
  }

  return (
    <div className="baja">
      <div className="baja-first-section">
        <div className="baja-left-box">
          <p className="baja-label">Baja o Arrepentimiento</p>
          <p className="baja-text">
            Podrás realizar la baja de nuestros servicios o la devolución de tu
            préstamo personal dentro de los 10 días hábiles de solicitado, para
            realizarlo completá el siguiente formulario
          </p>
        </div>
        <div className="baja-right-box">
          {!estadoActual && (
            <form className="form-baja">
              <FormInput
                placeholder="Apellido y Nombre"
                className="baja-form-input-container"
                maxLength={50}
                value={formBaja.nombre}
                onChange={handleNombreChange}
                validation={formBaja.validaciones.nombre}
              />
              <FormInput
                placeholder="CUIT/CUIL"
                className="baja-form-input-container"
                type="number"
                value={formBaja.cuit}
                onChange={handleCUITChange}
                validation={formBaja.validaciones.cuit}
              />
              <FormInput
                placeholder="Teléfono"
                className="baja-form-input-container"
                type="number"
                value={formBaja.telefono}
                onChange={handleTelefonoChange}
                validation={formBaja.validaciones.telefono}
              />
              <FormInput
                placeholder="E-mail"
                className="baja-form-input-container"
                type="email"
                value={formBaja.email}
                onChange={handleEmailChange}
                validation={formBaja.validaciones.email}
                maxLength={100}
              />
              <FormTextArea
                placeholder="Mensaje"
                rows={7}
                value={formBaja.mensaje}
                onChange={handleMensajeChange}
                validation={formBaja.validaciones.mensaje}
              />
              <FormButton
                label="ENVIAR"
                className="baja-button-container"
                disabled={!formValido}
                onClick={onFormSubmit}
              />
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
      <div>
        <p className="baja-nota">
          El/la USUARIO/A podrá revocar la aceptación del PRÉSTAMO dentro de los
          diez (10) días hábiles contados a partir de la fecha de perfeccionado
          el mismo, notificando de manera fehaciente o por el mismo medio en que
          fue contratado. El/la USUARIO/A deberá reintegrar el monto del
          PRESTAMO contratado dentro de las 24 hs. de solicitada, aclarándose
          que la revocación es sin costo ni responsabilidad alguna para el/la
          USUARIO/A, en la medida que no haya hecho uso del respectivo producto
          o servicio, y que, en el caso que lo haya utilizado, sólo se le
          cobrarán las comisiones y cargos previstos, proporcionados al tiempo
          de utilización del servicio o producto.
        </p>
        {/* <p className="baja-nota-2">
          También podés escribirnos por correo a administracion@credlap.com o
          comunicarte por teléfono al 0810-220-0570 o al WhatsApp 11-7831-2678
        </p> */}
      </div>
    </div>
  );
}
