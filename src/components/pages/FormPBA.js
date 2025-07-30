import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import imgCocoError from '../../images/credlap-coco-solicitud-erronea.png'
import imgCocoPreAproPBA from '../../images/coco-pre-aprobado-pba.png'
import FormButton from '../FormButton';
import FormCheckbox from '../FormCheckbox';
import FormInput from '../FormInput';
import FormDropdown from '../FormDropdown';
import './FormPBA.css'
import { sendMailWithAttachments } from '../../services/EmailService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

export default function FormPBA() {
  let ultimoReciboInput = useRef()
  let ultimosMovimientosInput = useRef()
  const [formValido, setFormValido] = useState(false)
  const [estadoActual, setEstadoActual] = useState(null)
  const [ultimosRecibos, setUltimosRecibos] = useState(null)
  const [ultimosMovimientos, setUltimosMovimientos] = useState(null)
  const [formPBA, setformPBA] = useState({
    nombre: '',
    CUIL: '',
    banco: '',
    telefono: '',
    email: '',
    monto: 1000,
    tyc: false,
    politicas: false,
    validaciones: {}
  })

  useEffect(() => {
    checkFormValido()
  }, [formPBA, ultimosRecibos, ultimosMovimientos]);

  function checkFormValido(){
    setFormValido(
      formPBA.nombre && !formPBA.validaciones.nombre &&
      formPBA.CUIL && !formPBA.validaciones.CUIL &&
      formPBA.banco && !formPBA.validaciones.banco &&
      formPBA.email && !formPBA.validaciones.email &&
      formPBA.telefono && !formPBA.validaciones.telefono &&
      formPBA.monto && !formPBA.validaciones.monto &&
      formPBA.tyc && formPBA.politicas &&
      ultimosRecibos && ultimosMovimientos
    )
  }

  function handleNombreChange(event){
    var mensaje = null
    if (!event.target.value)
      mensaje = 'Nombre es obligatorio'

    setformPBA(prevForm => (
      {
        ...prevForm,
        nombre: event.target.value,
        validaciones: {
          ...prevForm.validaciones,
          nombre: mensaje
        }
      }
    ))
  }

  function handleCUILChange(event){
    var mensaje = null
    if (!event.target.value)
      mensaje = 'CUIL es obligatorio'
    else {
      if (event.target.value.length > 11)
        return
      if (event.target.value.length < 11)
        mensaje = 'CUIL debe tener 11 dígitos'
    }

    setformPBA(prevForm => (
      {
        ...prevForm,
        CUIL: event.target.value,
        validaciones: {
          ...prevForm.validaciones,
          CUIL: mensaje
        }
      }
    ))
  }

  function handleBancoChange(event){
    var mensaje = null
    if (!event.target.value)
      mensaje = 'Indique su Banco'

    setformPBA(prevForm => (
      {
        ...prevForm,
        banco: event.target.value,
        validaciones: {
          ...prevForm.validaciones,
          banco: mensaje
        }
      }
    ))
  }

  function handleTelefonoChange(event){
    var mensaje = null
    if (!event.target.value)
      mensaje = 'Tel./Celular es obligatorio'
    else {
      if (event.target.value.length > 10)
        return
      if (event.target.value.length < 10)
        mensaje = 'Debe tener 10 dígitos: cód. de área + número'
    }

    setformPBA(prevForm => (
      {
        ...prevForm,
        telefono: event.target.value,
        validaciones: {
          ...prevForm.validaciones,
          telefono: mensaje
        }
      }
    ))
  }

  function handleEmailChange(event){
    var mensaje = null
    if (!event.target.value)
      mensaje = 'Email es obligatorio'
    else {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(event.target.value))
        mensaje = 'Email inválido'
    }
    setformPBA(prevForm => (
      {
        ...prevForm,
        email: event.target.value,
        validaciones: {
          ...prevForm.validaciones,
          email: mensaje
        }
      }
    ))
  }

  function handleTyCChecked(event){
    setformPBA(prevForm => (
      {
        ...prevForm,
        tyc: event.target.checked,
        validaciones: {
          ...prevForm.validaciones
        }
      }
    ))
  }

  function handlePoliticasChecked(event){
    setformPBA(prevForm => (
      {
        ...prevForm,
        politicas: event.target.checked,
        validaciones: {
          ...prevForm.validaciones
        }
      }
    ))
  }

  function onFormSubmit(event){
    event.preventDefault()
    setEstadoActual('enviando')
    //Hack para evitar enviar una solicitud sin ingresos
    let attachments = Array.from(ultimosRecibos).concat(Array.from(ultimosMovimientos))
    console.log(attachments)
    if (formPBA.banco==='sinBanco')
      setEstadoActual('sinBanco')
    else
      sendMailWithAttachments(
        formPBA.email,
        window.formPBA.mail,
        {
          "Nombre y Apellido": formPBA.nombre,
          "CUIL": formPBA.CUIL,
          "Banco": formPBA.banco,
          "Tel./Celular": formPBA.telefono,
          "Email": formPBA.email
        },
        formPBA.nombre + ' - Consulta clientes públicos',
        window.location.href,
        sendMailCallback,
        attachments
      )
    
  }

  function sendMailCallback(result){
    setEstadoActual(result.isError? 'error' : 'ok')
  }

  return (
    <div className='pba'>
      {
        estadoActual !== 'ok' &&
        estadoActual !== 'sinBanco' &&
        <div className='pba-first-section'>
          <div className='pba-tags'>
            <div className='pba-tag'>
              EXCLUSIVO
            </div>
            <div className='pba-tag'>
              EXPRESS
            </div>
            <div className='pba-tag'>
              CLIENTES BNA
            </div>
            <div className='pba-tag'>
              CLIENTES BAPRO
            </div>
          </div>
          <p><span className='pba-title'>Sacá tu préstamo personal ahora</span></p>
        </div>
      }
      {
        !estadoActual &&
        <div className='pba-second-section'>
          <div className='pba-left-box'>
            <form className='pba-form'>
              <FormInput
                  placeholder='Nombre y Apellido'
                  className='pba-form-input'
                  maxLength={50}
                  value={formPBA.nombre}
                  onChange={handleNombreChange}
                  validation={formPBA.validaciones.nombre}
              />
              <FormInput
                  placeholder='CUIL'
                  className='pba-form-input'
                  type='number'
                  value={formPBA.CUIL}
                  onChange={handleCUILChange}
                  validation={formPBA.validaciones.CUIL}
              />
              <FormDropdown
                placeholder='Seleccione su Banco...'
                className='pba-form-input'
                options={[
                  {
                    label: 'Banco Nación',
                    value: 'bancoNacion'
                  },
                  {
                    label: 'Banco de la Provincia de Buenos Aires',
                    value: 'bapro'
                  },
                  {
                    label: 'Ninguno de los anteriores',
                    value: 'sinBanco'
                  }
                ]}
                value={formPBA.banco}
                onChange={handleBancoChange}
                validation={formPBA.validaciones.banco}
              />
              <FormInput
                  placeholder='Tel./Celular'
                  type='number'
                  className='pba-form-input'
                  value={formPBA.telefono}
                  onChange={handleTelefonoChange}
                  validation={formPBA.validaciones.telefono}
              />
              <FormInput
                  placeholder='Email'
                  className='pba-form-input'
                  value={formPBA.email}
                  onChange={handleEmailChange}
                  validation={formPBA.validaciones.email}
              />
            </form>
          </div>
          <div className='pba-right-box'>
            <div className='pba-adjunto-container'>
              <input
                ref={input => ultimoReciboInput = input}
                multiple="multiple"
                type='file' style={{width:'0px', height:'0px',visibility:'hidden'}}
                onChange={(e) => {
                  console.log(e.target.files)
                  e.target.files && e.target.files.length > 0
                  ? setUltimosRecibos(e.target.files)
                  : setUltimosRecibos(null)
                }}
              />
              <label className='pba-label-adjuntar' style={{lineHeight:'50px'}}>Último recibo de sueldo</label>
              <FormButton label='ADJUNTAR' className='pba-button-container adjuntar' onClick={(e) => {e.preventDefault(); ultimoReciboInput.click(); }}/>
            </div>
            {
              ultimosRecibos && 
              <div className='pba-adjunto-desc'>
                <label>.../{ ultimosRecibos[0].name + (ultimosRecibos.length > 1? ' y otros' : '') }</label>
              </div>
            }
            <div className='pba-adjunto-container'>
              <input
                ref={input => ultimosMovimientosInput = input}
                multiple="multiple"
                type='file' style={{width:'0px', height:'0px',visibility:'hidden'}}
                onChange={(e) => {
                e.target.files && e.target.files.length > 0
                  ? setUltimosMovimientos(e.target.files)
                  : setUltimosMovimientos(null)
                }}
              />
              <div className='pba-label-adjuntar'>
                <label>Últimos movimientos bancarios*</label>
                <label className='pba-label-adjuntar-2'>* Donde se refleje la acreditación de haberes</label>
              </div>
              <FormButton label='ADJUNTAR' className='pba-button-container adjuntar' onClick={(e) => {e.preventDefault(); ultimosMovimientosInput.click(); }}/>
            </div>
            {
              ultimosMovimientos && 
              <div className='pba-adjunto-desc'>
                <label>.../{ ultimosMovimientos[0].name + (ultimosMovimientos.length > 1? ' y otros' : '') }</label>
              </div>
            }
            <div className='pba-checks-button-container'>
              <div className='pba-checkbox-container'>
                <FormCheckbox
                  label='Acepto los términos y condiciones'
                  value={formPBA.tyc}
                  onChange={handleTyCChecked}
                  validation={formPBA.validaciones.tyc}
                />
                <div style={{marginTop:'-15px'}}>
                  <FormCheckbox
                    label='Acepto las políticas de privacidad'
                    value={formPBA.politicas}
                    onChange={handlePoliticasChecked}
                    validation={formPBA.validaciones.politicas}
                  />
                </div>
              </div>
            </div>
            <FormButton
              label='ENVIAR SOLICITUD'
              className='pba-button-container'
              disabled={!formValido}
              onClick={onFormSubmit}
            />
          </div>
        </div>
      }
      {
        estadoActual === 'enviando' &&
        <div className='baja-enviando'>
          Procesando solicitud...
        </div>
      }
      {
        estadoActual === 'error' &&
        <div className='baja-enviando'>
          Ocurrió un error al enviar la solicitud.
        </div>
      }
      {
        estadoActual === 'ok' &&
        <div className='pba-pre-aprobado'>
          <div className='pre-aprobado-first-section'>
            <div className='pre-aprobado-left-box'>
              <p className='pre-aprobado-label'>¡LISTO! Casi tenés tu préstamo...</p>
              <p className='pre-aprobado-text'>Un asesor está revisando la documentación y se va a contactar a la brevedad para terminar con tu solicitud.</p>
              <br/>
              <p className='pre-aprobado-horarios'>
                <FontAwesomeIcon icon={solid('clock')}/> Recordá que nuestro horario de atención es de lunes a viernes de 09:30 a 16 hs y feriados de 09:30 a 13:30 hs.
              </p>
            </div>
            <div className='paga-right-box'>
                <img src={imgCocoPreAproPBA} className='paga-img'/>
            </div>
          </div>
        </div>
      }
      {
        estadoActual === 'sinBanco' &&
        <div className='pba-pre-aprobado'>
          <div className='pre-aprobado-first-section'>
            <div className='pre-aprobado-left-box'>
              <p className='pre-aprobado-label'>Solicitud Rechazada</p>
              <p className='pre-aprobado-text'>Esta línea sólo está disponible para personas que cobren por Banco Nación o Banco Provincia. Si no cobrás por estos bancos, ingresá al siguiente link:</p>
              <Link to='solicitar-prestamo'>
                <button className='pba-btn'>SOLICITÁ TU PRÉSTAMO</button>
              </Link>
              <p className='pre-aprobado-horarios'>
                <FontAwesomeIcon icon={solid('clock')}/> Recordá que nuestro horario de atención es de lunes a viernes de 09:30 a 16 hs y feriados de 09:30 a 13:30 hs.
              </p>
            </div>
            <div className='paga-right-box'>
                <img src={imgCocoError} className='paga-img'/>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
