import React, { useEffect, useState } from "react";
import "../../App.css";
import enviarSolicitud from "../../services/FinancieraService";
import FormButton from "../FormButton";
import FormCheckbox from "../FormCheckbox";
import FormDropdown from "../FormDropdown";
import FormInput from "../FormInput";
import Slider from "../Slider";
import "./Solicitud.css";

export default function Solicitud() {

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
    validaciones: {},
  });

  useEffect(() => {
    checkFormValido();
  }, [formSolicitud]);

  function checkFormValido() {
    setFormValido(
      formSolicitud.nombre &&
        !formSolicitud.validaciones.nombre &&
        formSolicitud.apellido &&
        !formSolicitud.validaciones.apellido &&
        formSolicitud.genero &&
        !formSolicitud.validaciones.genero &&
        formSolicitud.dni &&
        !formSolicitud.validaciones.dni &&
        formSolicitud.actividad &&
        !formSolicitud.validaciones.actividad &&
        formSolicitud.provincia &&
        !formSolicitud.validaciones.provincia &&
        formSolicitud.entidadBancaria &&
        !formSolicitud.validaciones.entidadBancaria &&
        formSolicitud.email &&
        !formSolicitud.validaciones.email &&
        formSolicitud.telefono &&
        !formSolicitud.validaciones.telefono &&
        formSolicitud.monto &&
        !formSolicitud.validaciones.monto &&
        formSolicitud.tyc &&
        formSolicitud.politicas
    );
  }

  function handleNombreChange(event) {
    const value = event.target.value.trim();
    let mensaje = null;
  
    if (!value) {
      mensaje = "El nombre es obligatorio";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value)) {
      mensaje = "El nombre solo puede contener letras";
    }
  
    setFormSolicitud((prevForm) => ({
      ...prevForm,
      nombre: value,
      validaciones: {
        ...prevForm.validaciones,
        nombre: mensaje,
      },
    }));
  }

  function handleApellidoChange(event) {
    const value = event.target.value.trim();
    let mensaje = null;

    if (!value) {
      mensaje = "El apellido es obligatorio";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value)) {
      mensaje = "El apellido solo puede contener letras";
    }

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      apellido: value,
      validaciones: {
        ...prevForm.validaciones,
        apellido: mensaje,
      },
    }));
  }

  function handleGeneroChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "El género es obligatorio";
    setFormSolicitud((prevForm) => ({
      ...prevForm,
      genero: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        genero: mensaje,
      },
    }));
  }

  function handleDNIChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "El DNI es obligatorio";
    else {
      if (event.target.value.length > 8) return;
      if (event.target.value.length < 7)
        mensaje = "DNI debe tener entre 7 y 8 dígitos";
    }

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      dni: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        dni: mensaje,
      },
    }));
  }

  function handleActividadChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "La actividad laboral es obligatoria";

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      actividad: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        actividad: mensaje,
      },
    }));
  }

  function handleProvinciaChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "La provincia es obligatoria";

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      provincia: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        provincia: mensaje,
      },
    }));
  }

  function handleEntidadBancariaChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "La entidad bancaria es obligatoria";

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      entidadBancaria: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        entidadBancaria: mensaje,
      },
    }));
  }

  function handleTelefonoChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "El Tel./Celular es obligatorio";
    else {
      if (event.target.value.length > 10) return;
      if (event.target.value.length < 10)
        mensaje = "Debe tener 10 dígitos: cód. de área + número";
    }

    setFormSolicitud((prevForm) => ({
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
    if (!event.target.value) mensaje = "El email es obligatorio";
    else {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(event.target.value)) mensaje = "Email inválido";
    }
    setFormSolicitud((prevForm) => ({
      ...prevForm,
      email: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        email: mensaje,
      },
    }));
  }

  function handleTyCChecked(event) {
    setFormSolicitud((prevForm) => ({
      ...prevForm,
      tyc: event.target.checked,
      validaciones: {
        ...prevForm.validaciones,
      },
    }));
  }

  function handlePoliticasChecked(event) {
    setFormSolicitud((prevForm) => ({
      ...prevForm,
      politicas: event.target.checked,
      validaciones: {
        ...prevForm.validaciones,
      },
    }));
  }

  function onFormSubmit(event) {
    event.preventDefault();
    //Hack para evitar enviar una solicitud sin ingresos
    if (formSolicitud.actividad === "No poseo ingresos demostrables")
      setTimeout(function () {
    handleSolicitudResponse({
      request: {
        responseURL: "/solicitud-resultado?resultado=sin-ingresos",
      },
    });
  }, 1000);
  else if (formSolicitud.actividad === "Tengo un beneficio de ANSES")
      //Hack para evitar enviar una solicitud de ANSES
    setTimeout(function () {
      handleSolicitudResponse({
        request: {
          responseURL: "/solicitud-resultado?resultado=anses",
        },
      });
    }, 1000);
    else if (provinciasExcluidas.includes(formSolicitud.provincia) || entidadesExcluidas.includes(formSolicitud.entidadBancaria))
      //Provincias y Entidades bancarias excluidas
    setTimeout(function () {
      handleSolicitudResponse({
        request: {
          responseURL: "/solicitud-resultado?resultado=rechazado",
        },
      });
    }, 1000);
    else if (formSolicitud.actividad === "Soy jubilado/pensionado de ANSES")
      //Hack para evitar enviar una solicitud de ANSES
    setTimeout(function () {
          handleSolicitudResponse({
            request: {
              responseURL: "/solicitud-resultado?resultado=anses",
            },
          });
        }, 1000);
    else {
    enviarSolicitud(formSolicitud, handleSolicitudResponse);
    setEstadoActual("enviando");
  }}

  function handleSliderChange(value) {
    setFormSolicitud((prevForm) => ({
      ...prevForm,
      monto: value,
      validaciones: {
        ...prevForm.validaciones,
      },
    }));
  }

  
  function handleSolicitudResponse(response) {
    if (
      response.isError ||
      !response.request.responseURL.includes("/solicitud")
    )
      window.location.href = "/solicitud-resultado?resultado=error";
    else {
      if (response.request.responseURL.includes("resultado=error"))
        window.location.href = "/solicitud-resultado?resultado=procesada";
      else
        window.location.href = response.request.responseURL.substring(
          response.request.responseURL.indexOf("/solicitud")
        );
    }
  }

  return (
    <div className="solicitud">
      <div className="left-box">
        <div className="monto-box">
          Elegí el monto al que querés acceder
          <div className="slider-container">
            <Slider
              min={25000}
              max={1500000}
              step={window.solicitud.sliderStep}
              onChange={handleSliderChange}
              className="slider-solicitud"
              value={25000}
            />
            <p className="label-monto">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })
                .format(formSolicitud.monto)
                .replace(",", ".")}
            </p>
          </div>
        </div>
      </div>
      <div className="center-box" />
      <div className="right-box">
        <p>
          <span className="form-title">Sacá tu préstamo personal </span>{" "}
          <span className="form-title2"> ahora</span>
        </p>
        {!estadoActual && (
          <form className="form-solicitud">
            <div>
              <FormInput
                placeholder="Nombre"
                className="solicitud-form-input"
                maxLength={50}
                value={formSolicitud.nombre}
                onChange={handleNombreChange}
                validation={formSolicitud.validaciones.nombre}
              />
              <FormInput
                placeholder="Apellido"
                className="solicitud-form-input"
                maxLength={50}
                value={formSolicitud.apellido}
                onChange={handleApellidoChange}
                validation={formSolicitud.validaciones.apellido}
              />
              <FormDropdown
                placeholder="Seleccione Género..."
                className="solicitud-form-input"
                options={[
                  {
                    label: "Femenino",
                    value: "F",
                  },
                  {
                    label: "Masculino",
                    value: "M",
                  },
                ]}
                value={formSolicitud.genero}
                onChange={handleGeneroChange}
                validation={formSolicitud.validaciones.genero}
              />
              <FormInput
                placeholder="DNI"
                className="solicitud-form-input"
                type="number"
                value={formSolicitud.dni}
                onChange={handleDNIChange}
                validation={formSolicitud.validaciones.dni}
              />
              <FormDropdown
                placeholder="Actividad laboral"
                className="solicitud-form-input"
                options={[
                  {
                    label: "Tengo recibo de sueldo",
                    value: "Tengo recibo de sueldo",
                  },
                  {
                    label: "Soy monotributista/autónomo",
                    value: "Soy monotributista/autónomo",
                  },
                  {
                    label: "Soy jubilado/pensionado de ANSES",
                    value: "Soy jubilado/pensionado de ANSES",
                  },
                  {
                    label: "Soy jubilado/pensionado Provincial",
                    value: "Soy jubilado/pensionado Provincial",
                  },
                  {
                    label: "Tengo un beneficio de ANSES",
                    value: "Tengo un beneficio de ANSES",
                  },
                  {
                    label: "No poseo ingresos demostrables",
                    value: "No poseo ingresos demostrables",
                  },
                ]}
                value={formSolicitud.actividad}
                onChange={handleActividadChange}
                validation={formSolicitud.validaciones.actividad}
              />
              <FormInput
                placeholder="Tel./Celular"
                type="number"
                className="solicitud-form-input"
                value={formSolicitud.telefono}
                onChange={handleTelefonoChange}
                validation={formSolicitud.validaciones.telefono}
              />
              <FormInput
                placeholder="Email"
                className="solicitud-form-input"
                value={formSolicitud.email}
                onChange={handleEmailChange}
                validation={formSolicitud.validaciones.email}
              />
              <FormDropdown
                placeholder="Provincia"
                className="solicitud-form-input"
                options={provinciasLabelsYValues}
                value={formSolicitud.provincia}
                onChange={handleProvinciaChange}
                validation={formSolicitud.validaciones.provincia}
              />
              <FormDropdown
                placeholder="Entidad bancaria"
                className="solicitud-form-input"
                options={entidadesBancariasLabelsYValues}
                value={formSolicitud.entidadBancaria}
                onChange={handleEntidadBancariaChange}
                validation={formSolicitud.validaciones.entidadBancaria}
              />
            </div>
            
              
            <div className="solicitud-checks-button-container">
              <div className="solicitud-checkbox-container">
                <FormCheckbox
                  label="Acepto los términos y condiciones"
                  value={formSolicitud.tyc}
                  onChange={handleTyCChecked}
                  validation={formSolicitud.validaciones.tyc}
                />
                <div style={{ marginTop: "-15px" }}>
                  <FormCheckbox
                    label="Acepto las políticas de privacidad"
                    value={formSolicitud.politicas}
                    onChange={handlePoliticasChecked}
                    validation={formSolicitud.validaciones.politicas}
                  />
                </div>
              </div>
              <FormButton
                label="ENVIAR SOLICITUD"
                className="solicitud-button-container"
                disabled={!formValido}
                onClick={onFormSubmit}
              />
            </div>
          </form>
        )}
        {estadoActual === "enviando" && (
          <div className="baja-enviando">Procesando solicitud...</div>
        )}
      </div>
    </div>
  );
}

//Datos para la exclusion de ciertas provincias
const listaDeProvincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos","Formosa", "Jujuy","La Pampa", "La Rioja","Mendoza", "Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Tucumán","Tierra del Fuego, Antártida e Islas del Atlántico Sur","Santiago del Estero"]
const provinciasLabelsYValues = listaDeProvincias.map(provincia => {
  return {
    label: provincia,
    value: provincia
  }
})
const provinciasExcluidas = ["Misiones", "Chaco", "Entre Ríos", "Jujuy", "Salta"]

//Datos para la exclusion de ciertas entidades bancarias
const listaDeEntidadesBancarias = ["BANCO DE GALICIA Y BUENOS AIRES S.A.U.","BANCO DE LA NACION ARGENTINA","BANCO DE LA PROVINCIA DE BUENOS AIRES","INDUSTRIAL AND COMMERCIAL BANK OF CHINA","CITIBANK N.A.","BANCO BBVA ARGENTINA S.A.","BANCO DE LA PROVINCIA DE CORDOBA S.A.","BANCO SUPERVIELLE S.A.","BANCO DE LA CIUDAD DE BUENOS AIRES", "BANCO PATAGONIA S.A.","BANCO HIPOTECARIO S.A.","BANCO DE SAN JUAN S.A.BANCO MUNICIPAL DE ROSARIO","BANCO SANTANDER ARGENTINA S.A.","BANCO DEL CHUBUT S.A.","BANCO DE SANTA CRUZ S.A.","BANCO DE LA PAMPA SOCIEDAD DE ECONOMÍA M" ,"BANCO DE CORRIENTES S.A.","BANCO PROVINCIA DEL NEUQUÉN","BANK OF CHINA LIMITED SUCURSAL BUENOS AIRES","BRUBANK S.A.U.","BIBANK S.A.","BANCO GGAL SA","JPMORGAN CHASE BANK, NATIONAL ASSOCIATION","BANCO CREDICOOP COOPERATIVO LIMITADO","BANCO DE VALORES S.A.","BANCO ROELA S.A.","BANCO MARIVA S.A.","BNP PARIBAS","BANCO PROVINCIA DE TIERRA DEL FUEGO","BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY","BANCO SAENZ S.A.","BANCO MERIDIAN S.A.","BANCO MACRO S.A.","BANCO COMAFI SOCIEDAD ANONIMA","BANCO DE INVERSION Y COMERCIO EXTERIOR","BANCO PIANO S.A.","BANCO JULIO SOCIEDAD ANONIMA","BANCO RIOJA SOCIEDAD ANONIMA UNIPERSONAL","BANCO DEL SOL S.A.","NUEVO BANCO DEL CHACO S.A.","BANCO VOII S.A.","BANCO DE FORMOSA S.A.","BANCO CMF S.A.","BANCO DE SANTIAGO DEL ESTERO S.A.","BANCO INDUSTRIAL S.A.","NUEVO BANCO DE SANTA FE SOCIEDAD ANONIMA","BANCO CETELEM ARGENTINA S.A.","BANCO DE SERVICIOS FINANCIEROS S.A.","BANCO DE SERVICIOS Y TRANSACCIONES S.A.","RCI BANQUE S.A.","BACS BANCO DE CREDITO Y SECURITIZACION","BANCO MASVENTAS S.A.","WILOBANK S.A.U.","NUEVO BANCO DE ENTRE RÍOS S.A.","BANCO COLUMBIA S.A.","BANCO BICA S.A.","BANCO COINAG S.A.","BANCO DE COMERCIO S.A.","BANCO SUCREDITO REGIONAL S.A.U.","BANCO DINO S.A.","COMPAÑIA FINANCIERA ARGENTINA S.A.","VOLKSWAGEN FINANCIAL SERVICES COMPAÑIA","FCA COMPAÑIA FINANCIERA S.A.", "GPAT COMPAÑIA FINANCIERA S.A.U.", "MERCEDES-BENZ COMPAÑÍA FINANCIERA ARGENTINA","ROMBO COMPAÑÍA FINANCIERA S.A.","JOHN DEERE CREDIT COMPAÑÍA FINANCIERA S.","PSA FINANCE ARGENTINA COMPAÑÍA FINANCIER","TOYOTA COMPAÑÍA FINANCIERA DE ARGENTINA", "NARANJA DIGITAL COMPAÑÍA FINANCIERA S.A.","MONTEMAR COMPAÑIA FINANCIERA S.A.","REBA COMPAÑIA FINANCIERA S.A.","CRÉDITO REGIONAL COMPAÑÍA FINANCIERA S.A", "OTROS BANCOS"]
const entidadesBancariasLabelsYValues = listaDeEntidadesBancarias.map(entidad => {
  return {
    label: entidad,
    value: entidad
  }
})
const entidadesExcluidas = ["BANCO BBVA ARGENTINA S.A.", "BANCO DE LA NACION ARGENTINA", "NUEVO BANCO DEL CHACO S.A.", "NUEVO BANCO DE ENTRE RÍOS S.A.", "BANCO DE GALICIA Y BUENOS AIRES S.A.U.", "BANCO MACRO S.A."]