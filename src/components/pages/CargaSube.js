import React, { useEffect, useState } from "react";
import "../../App.css";
import enviarSolicitud from "../../services/SBFintechService";
import FormButton from "../FormButton";
import FormCheckbox from "../FormCheckbox";
import FormDropdown from "../FormDropdown";
import FormInput from "../FormInput";
import AdobeSignWidget from "../AdobeSignWidget";
import { ADOBE_SIGN_CONFIG } from "../../Config";
import "./CargaSube.css";
import avatarSube from "../../images/Coco-Sube_Servicios.png";
import dniFrente from "../../images/Dni-Frente_Servicios.png"
import dniDorso from "../../images/Dni-Dorso_Servicios.png"
import iconSelfie from "../../images/Selfie_Servicios.png"


export default function CargaSube() {
  const [formValido, setFormValido] = useState(false);
  const [estadoActual, setEstadoActual] = useState(null); // "enviando", "firmando", "firmado", null
  const [condicionesServicioLeidas, setCondicionesServicioLeidas] = useState(false);
  const [idPreaprobado, setIdPreaprobado] = useState(null); // ID de preaprobación
  const [firmaCargada, setFirmaCargada] = useState(false);
  const [formSolicitud, setFormSolicitud] = useState({
    nombreCompleto: "",
    genero: "",
    dni: "",
    provincia: "",
    telefono: "",
    email: "",
    numeroTarjetaSube: "",
    tyc: false,
    politicas: false,
    condicionesServicio: false,
    validaciones: {},
  });

  // Estado para las imágenes
  const [imagenes, setImagenes] = useState({
    dniFrente: null,
    dniDorso: null,
    selfie: null,
  });

  useEffect(() => {
    checkFormValido();
  }, [formSolicitud, imagenes]);

  function checkFormValido() {
    const esValido =
      formSolicitud.nombreCompleto &&
      formSolicitud.genero &&
      formSolicitud.dni &&
      formSolicitud.provincia &&
      formSolicitud.email &&
      formSolicitud.telefono &&
      formSolicitud.numeroTarjetaSube &&
      formSolicitud.tyc &&
      formSolicitud.politicas &&
      formSolicitud.condicionesServicio &&
      imagenes.dniFrente &&
      imagenes.dniDorso &&
      imagenes.selfie;

    setFormValido(esValido);
  }

  function handleNombreCompletoChange(event) {
    const value = event.target.value; // No trimear aquí, permitir espacios
    let mensaje = null;

    if (!value || !value.trim()) {
      mensaje = "El nombre y apellido son obligatorios";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/.test(value)) {
      mensaje = "El nombre y apellido solo pueden contener letras";
    } else {
      // Validar que tenga al menos dos palabras (nombre y apellido)
      const palabras = value.trim().split(/\s+/).filter(p => p.length > 0);
      if (palabras.length < 2) {
        mensaje = "Debe ingresar al menos nombre y apellido";
      }
    }

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      nombreCompleto: value,
      validaciones: {
        ...prevForm.validaciones,
        nombreCompleto: mensaje,
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

  function handleNumeroTarjetaSubeChange(event) {
    var mensaje = null;
    if (!event.target.value) mensaje = "El número de tarjeta SUBE es obligatorio";
    else {
      if (event.target.value.length > 16) return;
      if (event.target.value.length < 16)
        mensaje = "El número de tarjeta debe tener 16 dígitos";
    }

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      numeroTarjetaSube: event.target.value,
      validaciones: {
        ...prevForm.validaciones,
        numeroTarjetaSube: mensaje,
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

  function handleCondicionesServicioChecked(event) {
    // Solo permitir marcar el checkbox si ya leyó las condiciones
    if (!condicionesServicioLeidas) {
      console.warn('⚠️  [CargaSube] Usuario intentó marcar checkbox sin leer condiciones');
      alert('Debes hacer clic en el link de condiciones de uso antes de marcar este checkbox');
      return;
    }

    setFormSolicitud((prevForm) => ({
      ...prevForm,
      condicionesServicio: event.target.checked,
      validaciones: {
        ...prevForm.validaciones,
      },
    }));
  }

  function handleCondicionesServicioLink(event) {
    // Marcar que el usuario hizo click en el link
    setCondicionesServicioLeidas(true);
  }

  // Función para convertir archivo a base64
  function convertirArchivoABase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        console.error('❌ [convertirArchivoABase64] Error en conversión:', error);
        reject(error);
      };
    });
  }

  // Funciones para manejar carga de imágenes
  async function handleImagenDniFrente(event) {
    const file = event.target.files[0];
    if (file) {
      // Validar que sea una imagen
      if (!file.type.startsWith('image/')) {
        console.warn('⚠️  [handleImagenDniFrente] Tipo de archivo inválido:', file.type);
        alert('Por favor seleccione un archivo de imagen válido');
        return;
      }
      // Validar tamaño máximo (5MB)
      if (file.size > 5 * 1024 * 1024) {
        console.warn('⚠️  [handleImagenDniFrente] Archivo muy grande:', file.size, 'bytes');
        alert('La imagen no debe superar los 5MB');
        return;
      }
      try {
        const base64 = await convertirArchivoABase64(file);
        setImagenes(prev => ({ ...prev, dniFrente: base64 }));
      } catch (error) {
        console.error('❌ [handleImagenDniFrente] Error al cargar imagen:', error);
        alert('Error al cargar la imagen');
      }
    }
  }

  async function handleImagenDniDorso(event) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        console.warn('⚠️  [handleImagenDniDorso] Tipo de archivo inválido:', file.type);
        alert('Por favor seleccione un archivo de imagen válido');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        console.warn('⚠️  [handleImagenDniDorso] Archivo muy grande:', file.size, 'bytes');
        alert('La imagen no debe superar los 5MB');
        return;
      }
      try {
        const base64 = await convertirArchivoABase64(file);
        setImagenes(prev => ({ ...prev, dniDorso: base64 }));
      } catch (error) {
        console.error('❌ [handleImagenDniDorso] Error al cargar imagen:', error);
        alert('Error al cargar la imagen');
      }
    }
  }

  async function handleImagenSelfie(event) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        console.warn('⚠️  [handleImagenSelfie] Tipo de archivo inválido:', file.type);
        alert('Por favor seleccione un archivo de imagen válido');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        console.warn('⚠️  [handleImagenSelfie] Archivo muy grande:', file.size, 'bytes');
        alert('La imagen no debe superar los 5MB');
        return;
      }
      try {
        const base64 = await convertirArchivoABase64(file);
        setImagenes(prev => ({ ...prev, selfie: base64 }));
      } catch (error) {
        console.error('Error al cargar imagen:', error);
        alert('Error al cargar la imagen');
      }
    }
  }

  function onFormSubmit(event) {
    console.log('✓ [CargaSube] Botón ENVIAR SOLICITUD presionado');

    if (provinciasExcluidas.includes(formSolicitud.provincia)) {
      console.warn('⚠️  [CargaSube] Provincia excluida:', formSolicitud.provincia);
      //Provincias excluidas
      setTimeout(function () {
        handleSolicitudResponse({
          request: {
            responseURL: "/solicitud-resultado?resultado=rechazado",
          },
        });
      }, 1000);
    } else {
      // Dividir nombre completo en nombre y apellido para enviar al servidor
      const palabras = formSolicitud.nombreCompleto.trim().split(/\s+/);
      const nombre = palabras[0];
      const apellido = palabras.slice(1).join(" ");

      if (!nombre || !apellido) {
        alert('Por favor, ingresa tu nombre y apellido completo (mínimo dos palabras)');
        return;
      }

      const solicitudParaEnviar = {
        ...formSolicitud,
        nombre: nombre,
        apellido: apellido,
        // Agregar imágenes en base64
        imagenDniFrente: imagenes.dniFrente,
        imagenDniDorso: imagenes.dniDorso,
        imagenSelfie: imagenes.selfie
      };
      // Guardar datos del formulario en sessionStorage para el flujo de firma
      const datosParaGuardar = {
        nombre: solicitudParaEnviar.nombre,
        apellido: solicitudParaEnviar.apellido,
        genero: solicitudParaEnviar.genero,
        dni: solicitudParaEnviar.dni,
        telefono: solicitudParaEnviar.telefono,
        email: solicitudParaEnviar.email,
        provincia: solicitudParaEnviar.provincia,
        monto: 25000, // Monto fijo para Carga SUBE
      };

      try {
        sessionStorage.setItem('credlap_formData', JSON.stringify(datosParaGuardar));
      } catch (error) {
        console.warn('⚠️  [CargaSube] No se pudo guardar datos en sessionStorage:', error);
      }

      enviarSolicitud(solicitudParaEnviar, handleSolicitudResponse);
      setEstadoActual("enviando");
    }
  }

  function handleSolicitudResponse(response) {

    if (response?.isError) {
      console.error('❌ [CargaSube] Error en solicitud:', response.error);
      console.error('📝 [CargaSube] Detalles del error:', response);
      window.location.href = "/solicitud-resultado?resultado=error";
      return;
    }

    // Si llegamos aquí, la solicitud fue exitosa (idPreaprobado + documentos subidos)
    // Ahora mostramos el widget de Adobe Sign (usando widget ID fijo del frontend)
    const idPreaprobadoRecibido = response?.data?.idPreaprobado || response?.data?.idReferencia;

    if (idPreaprobadoRecibido) {
      setIdPreaprobado(idPreaprobadoRecibido);

      const adobeUrl = `https://na3.documents.adobe.com/public/embeddedWidget?wid=${ADOBE_SIGN_CONFIG.widgetId}`;

      // 💻 Desktop → sigue con iframe
      setEstadoActual("firmando");

      console.log('✓ [CargaSube] Mostrando formulario de firma. ID:', idPreaprobadoRecibido);
    } else {
      console.warn('⚠️  [CargaSube] No se recibió ID de preaprobado');
      window.location.href = "/solicitud-resultado?resultado=error";
    }
  }

  function handleAdobeSignComplete() {
    console.log('✓ [CargaSube] Firma completada exitosamente');
    setEstadoActual("firmado");

    // Guardar en sessionStorage que la firma se completó
    try {
      const datosFormulario = JSON.parse(sessionStorage.getItem('credlap_formData') || '{}');
      datosFormulario.adobeSignFirmado = true;
      datosFormulario.idPreaprobado = idPreaprobado;
      sessionStorage.setItem('credlap_formData', JSON.stringify(datosFormulario));
    } catch (error) {
      console.warn('⚠️  [CargaSube] Error guardando estado de firma:', error);
    }

    // Redirigir a página de resultado después de 1 segundo
    setTimeout(() => {
      window.location.href = "/solicitud-resultado?resultado=preaprobado";
    }, 1000);
  }

  function handleAdobeSignError(error) {
    console.error('❌ [CargaSube] Error en firma de Adobe Sign:', error);
    setEstadoActual(null);
    alert('Error al completar la firma. Por favor intente nuevamente.');
  }

  useEffect(() => {
    const firmaPendiente = sessionStorage.getItem("firmaPendiente");

    if (firmaPendiente) {
      console.log("🔁 Usuario volvió de Adobe Sign");

      sessionStorage.removeItem("firmaPendiente");

      // ⚠️ OPCIÓN SIMPLE:
      setEstadoActual("firmado");

      // ⚠️ OPCIÓN PRO (mejor):
      // acá podrías pegarle a tu backend para verificar si realmente firmó
    }
  }, []);

  return (
    <div className={`carga-sube-wrapper ${estadoActual === "firmando" ? "firma-fullscreen" : ""}`}>
      <div className="carga-sube-card">
        {/* HEADER */}
        <div className="carga-sube-header">
          <img src={avatarSube} alt="Avatar SUBE" />
          <div className="carga-sube-header-text">
            <h2>Cargá tu SUBE</h2>
            <p>Devolvé $25.000 en una cuota sin interés</p>
          </div>
        </div>

        <div className={`carga-sube-content ${estadoActual === "firmando" ? "firmando" : ""}`}>
          {/* IZQUIERDA */}
          <div className="carga-sube-left">
            {!estadoActual && (
              <>
                <h3>
                  <span>1</span> Datos personales
                </h3>

                <div className="grid-2">
                  <FormInput
                    placeholder="Nombre y apellido"
                    maxLength={100}
                    value={formSolicitud.nombreCompleto}
                    onChange={handleNombreCompletoChange}
                    validation={formSolicitud.validaciones.nombreCompleto}
                  />
                  <FormInput
                    placeholder="DNI"
                    type="number"
                    value={formSolicitud.dni}
                    onChange={handleDNIChange}
                    validation={formSolicitud.validaciones.dni}
                  />
                  <FormDropdown
                    placeholder="Seleccione Género..."
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
                  <FormDropdown
                    placeholder="Provincia"
                    options={provinciasLabelsYValues}
                    value={formSolicitud.provincia}
                    onChange={handleProvinciaChange}
                    validation={formSolicitud.validaciones.provincia}
                  />
                  <FormInput
                    placeholder="Celular"
                    type="number"
                    value={formSolicitud.telefono}
                    onChange={handleTelefonoChange}
                    validation={formSolicitud.validaciones.telefono}
                  />
                  <FormInput
                    placeholder="E-mail"
                    value={formSolicitud.email}
                    onChange={handleEmailChange}
                    validation={formSolicitud.validaciones.email}
                  />
                </div>

                <h3>
                  <span>2</span> Número de tu tarjeta SUBE
                </h3>
                <FormInput
                  placeholder="N° de la tarjeta a tu nombre donde se realizará la recarga"
                  type="number"
                  value={formSolicitud.numeroTarjetaSube}
                  onChange={handleNumeroTarjetaSubeChange}
                  validation={formSolicitud.validaciones.numeroTarjetaSube}
                />
              </>
            )}
            {estadoActual === "enviando" && (
              <div className="baja-enviando">Procesando solicitud...</div>
            )}
            {estadoActual === "firmando" && !firmaCargada && (
              <div className="baja-enviando">Cargando formulario de firma...</div>
            )}
            {estadoActual === "firmado" && (
              <div className="baja-enviando">¡Firma completada! Redirigiendo...</div>
            )}
          </div>

          {/* DERECHA */}
          <div className="carga-sube-right">
            {!estadoActual && (
              <>
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
                  <input
                    type="file"
                    id="dniFrente"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImagenDniFrente}
                  />
                  <button
                    type="button"
                    className={imagenes.dniFrente ? "ok" : ""}
                    onClick={() => document.getElementById('dniFrente').click()}
                  >
                    {imagenes.dniFrente ? "Cargado ✓" : "Cargar imagen"}
                  </button>
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
                  <input
                    type="file"
                    id="dniDorso"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImagenDniDorso}
                  />
                  <button
                    type="button"
                    className={imagenes.dniDorso ? "ok" : ""}
                    onClick={() => document.getElementById('dniDorso').click()}
                  >
                    {imagenes.dniDorso ? "Cargado ✓" : "Cargar imagen"}
                  </button>
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
                  <input
                    type="file"
                    id="selfie"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImagenSelfie}
                  />
                  <button
                    type="button"
                    className={imagenes.selfie ? "ok" : ""}
                    onClick={() => document.getElementById('selfie').click()}
                  >
                    {imagenes.selfie ? "Cargado ✓" : "Cargar imagen"}
                  </button>
                </div>

                <div className="checks">
                  <FormCheckbox
                    label="Acepto los términos y condiciones"
                    value={formSolicitud.tyc}
                    onChange={handleTyCChecked}
                    validation={formSolicitud.validaciones.tyc}
                  />
                  <FormCheckbox
                    label="Acepto políticas de privacidad"
                    value={formSolicitud.politicas}
                    onChange={handlePoliticasChecked}
                    validation={formSolicitud.validaciones.politicas}
                  />
                  <div className="form-checkbox-container">
                    <div className="input-checkbox-container">
                      <input
                        type="checkbox"
                        className="input-checkbox"
                        checked={formSolicitud.condicionesServicio}
                        onChange={handleCondicionesServicioChecked}
                        title={!condicionesServicioLeidas ? "Haz clic en el link de condiciones primero" : ""}
                      />
                    </div>
                    <label className="label-checkbox">
                      <a
                        href="https://workdrive.zohoexternal.com/external/5fc94b3c29bbe85da3bb9695e4e5d12ffe09da8f09a92508e6d6a0bb52a15066"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`checkbox-link ${condicionesServicioLeidas ? 'link-leido' : ''}`}
                        onClick={handleCondicionesServicioLink}
                      >
                        Acepto las condiciones de uso del servicio
                      </a>
                      {condicionesServicioLeidas && <span className="link-leido-icon">✓</span>}
                      {!condicionesServicioLeidas && <span className="link-no-leido-texto"> (Haz clic en el link primero)</span>}
                      .
                    </label>
                  </div>
                </div>

                <FormButton
                  label="ENVIAR SOLICITUD"
                  disabled={false}
                  onClick={onFormSubmit}
                />
              </>
            )}
            {estadoActual === "enviando" && (
              <div className="baja-enviando">Procesando solicitud...</div>
            )}
            {(estadoActual === "firmando" || estadoActual === "firmado") && (
              <div className="adobe-sign-container">
                <h3>
                  <span>4</span> Firma digital
                </h3>

                <p className="firma-descripcion">
                  Por favor, complete su firma electrónica a continuación
                </p>

                <AdobeSignWidget
                  widgetId={ADOBE_SIGN_CONFIG.widgetId}
                  userName={formSolicitud.nombreCompleto}
                  onSignComplete={handleAdobeSignComplete}
                  onSignError={handleAdobeSignError}
                  onLoad={() => setFirmaCargada(true)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

//Datos para la exclusion de ciertas provincias
const listaDeProvincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Tucumán", "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "Santiago del Estero"]
const provinciasLabelsYValues = listaDeProvincias.map(provincia => {
  return {
    label: provincia,
    value: provincia
  }
})
const provinciasExcluidas = []