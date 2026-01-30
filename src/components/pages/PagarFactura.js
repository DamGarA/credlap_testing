import React, { useEffect, useState } from "react";
import "../../App.css";
import enviarSolicitud from "../../services/FinancieraService";
import FormButton from "../FormButton";
import FormCheckbox from "../FormCheckbox";
import FormDropdown from "../FormDropdown";
import FormInput from "../FormInput";
import Slider from "../Slider";
import "./PagarFactura.css";
import avatarPagarFactura from "../../images/Coco-factura_Servicios.png";
import dniFrente from "../../images/Dni-Frente_Servicios.png"
import dniDorso from "../../images/Dni-Dorso_Servicios.png"
import iconSelfie from "../../images/Selfie_Servicios.png"

export default function CargaSube() {
  const [formValido, setFormValido] = useState(false);
  const [estadoActual, setEstadoActual] = useState(null);

  const [formSolicitud, setFormSolicitud] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    dni: "",
    actividad: "",
    telefono: "",
    email: "",
    provincia: "",
    entidadBancaria: "",
    monto: 25000,
    tyc: false,
    politicas: false,
    validaciones: {}
  });

  useEffect(() => {
    setFormValido(
      formSolicitud.nombre &&
        formSolicitud.apellido &&
        formSolicitud.genero &&
        formSolicitud.dni &&
        formSolicitud.actividad &&
        formSolicitud.telefono &&
        formSolicitud.email &&
        formSolicitud.provincia &&
        formSolicitud.entidadBancaria &&
        formSolicitud.tyc &&
        formSolicitud.politicas
    );
  }, [formSolicitud]);

  return (
    <div className="carga-sube-wrapper">
      <div className="carga-sube-card">
        {/* HEADER */}
        <div className="carga-sube-header">
          <img src={avatarPagarFactura} alt="Avatar Pagar Factura" />
          <div className="carga-sube-header-text">
            <h2>Pagá tu factura</h2>
            <p>Devolvé $25.000 en una cuota sin interés</p>
          </div>
        </div>

        <div className="carga-sube-content">
          {/* IZQUIERDA */}
          <div className="carga-sube-left">
            <h3>
              <span>1</span> Datos personales
            </h3>

            <div className="grid-2">
              <FormInput placeholder="Nombre y apellido" />
              <FormInput placeholder="DNI" />
              <FormDropdown placeholder="Seleccione género..." />
              <FormDropdown placeholder="Provincia" />
              <FormInput placeholder="Celular" />
              <FormInput placeholder="E-mail" />
            </div>

            <h3>
              <span>2</span> Datos de tu factura
            </h3>
            <div className="grid-1">
              <FormDropdown placeholder="Empresa" />
              <FormInput placeholder="Código de barras / N° de factura / N° de cliente" />
            </div>
            <div className="upload-item">
              <div className="upload-left">
                <img
                  src={dniDorso}
                  alt="DNI dorso"
                />
                <div>
                  <strong>Factura</strong>                </div>
              </div>
              <button>Cargar imagen</button>
            </div>
          </div>

          {/* DERECHA */}
          <div className="carga-sube-right">
            <h3>
              <span>3</span> Validación
            </h3>

            <div className="upload-item">
              <div className="upload-left">
                <img src={dniFrente} alt="DNI" />
                <div>
                  <strong>Frente del DNI</strong>
                  <small>La imagen debe ser 100% visible</small>
                </div>
              </div>
              <button className="ok">Cargado ✓</button>
            </div>

            <div className="upload-item">
              <div className="upload-left">
                <img
                  src={dniDorso}
                  alt="DNI dorso"
                />
                <div>
                  <strong>Dorso del DNI</strong>
                  <small>La imagen debe ser 100% visible</small>
                </div>
              </div>
              <button>Cargar imagen</button>
            </div>

            <div className="upload-item">
              <div className="upload-left">
                <img
                  src={iconSelfie}
                  alt="Selfie DNI"
                />
                <div>
                  <strong>Selfie sosteniendo tu DNI</strong>
                  <small>¿Cómo hago la selfie?</small>
                </div>
              </div>
              <button>Cargar imagen</button>
            </div>

            <div className="checks">
              <FormCheckbox label="Acepto los términos y condiciones" />
              <FormCheckbox label="Acepto políticas de privacidad" />
              <FormCheckbox label="Acepto la carga de $25.000 a devolver en un pago sin interés." />
            </div>

            <FormButton label="ENVIAR SOLICITUD" />
          </div>
        </div>
      </div>
    </div>
  );
}
