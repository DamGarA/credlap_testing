import React, { useEffect, useRef, useState } from "react";
import "./Ayuda.css";
import imgAyuda from "../../images/coco-ayuda.png";
import imgCaretRightSmall from "../../images/caret-right-small.png";
import imgCaretDownSmall from "../../images/caret-down-small.png";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import FormTextArea from "../FormTextArea";
import Accordion from "../Accordion";
import { Link } from "react-router-dom";
import { sendMail } from "../../services/EmailService";
import Tooltip from "../Tooltip";
// import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function Ayuda() {
  //variable dela que venia el numero: window.ayuda.faq.pagocuotawsp

  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/6PGD8XS6ER/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);
  const tooltip1 = useRef(null);
  const tooltip2 = useRef(null);

  return (
    <div className="ayuda">
      <div className="ayuda-first-section">
        <div className="ayuda-titulo-container">
          <p className="ayuda-titulo">
            Estamos para ayudarte
            <br />
            ¿Sobre qué querés saber?
          </p>
          <img src={imgAyuda} className="ayuda-img" />
        </div>
        <div className="ayuda-contenido">
          <Accordion
            headerClassName="ayuda-accordion-header"
            items={[
              {
                className: "ayuda-accordion-prestamo",
                titulo: "Sobre el préstamo",
                contenido: (
                  <Accordion
                    showSeparator={true}
                    separatorClass="ayuda-subaccordion-separator"
                    imgCollapsed={imgCaretRightSmall}
                    imgExpanded={imgCaretDownSmall}
                    headerClassName="ayuda-subaccordion-header"
                    items={[
                      {
                        titulo: "¿Cómo lo pido?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Tu préstamo podes obtenerlo con estos tres simples
                              pasos:
                            </p>
                            <p>
                              1 - Al ingresar a nuestra web, encontrarás un
                              botón en la página principal o desde el menú
                              "Solicitá tu préstamo" donde accedés al formulario
                              de contacto.
                            </p>
                            <p>
                              2 - Completá el formulario con tus datos personales y la 
                              cantidad de dinero que desees solicitar. 
                              ¡Todos nuestros préstamos se ajustan a tu medida!
                            </p>
                            <p>
                              3 - ¡Último paso! Agendanos y envianos un Whatsapp así 
                              finalizamos el proceso de manera 100% online. ¡Y listo!
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Qué hacer si mi solicitud fue aceptada?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">     
                            <p>
                            Si tu solicitud de préstamo fue preaprobada, por favor, agéndanos y envíanos un WhatsApp al número que aparece en pantalla o también podes acceder al link que se encuentra en el chat.
                            </p>
                            <p>
                              Para facilitar el proceso y obtener tu préstamo en el día, envíanos:
                            </p>
                            <p>☑ Foto del DNI frente y dorso</p>
                            <p>☑ Selfie con el DNI a la altura del pecho</p>
                            <p>☑ Comprobante de ingresos</p>
                            <p>Recordá que nuestros horarios de atención los podés encontrar en el pie de página.</p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Qué hacer si mi solicitud fue rechazada?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                            Actualmente, hay tres motivos por los cuales nuestro sistema puede rechazar tu solicitud. En caso de que nuestras políticas cambien, podrás volver a intentarlo en 10 días.
                            </p>
                            <p>
                              1- Tenés situaciones crediticias negativas en la
                              central de deudores del BCRA.
                            </p>
                            <p>2- No contás con comprobante de ingresos.</p>
                            <p>
                              3- Tenes un beneficio o un tipo de comprobante de ingresos 
                              con el que no estamos trabajando.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Cómo funciona el rechazo por BCRA?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                            Esto se debe a que es necesario no tener atrasos en tus pagos, ya que, al atrasarte, las entidades informan al BCRA y se generan situaciones negativas. Cuanto más tiempo debas, mayor será el número de la situación informada. Para más información, ingresa al siguiente link del BCRA y consulta tus deudas de manera pública y gratuita en {" "}
                              <a href="http://www.bcra.gob.ar/BCRAyVos/Situacion_Crediticia.asp">
                                BCRA: Situación Crediticia
                              </a>
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo:
                          "¿Qué pasa si no tengo comprobante de ingresos?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Lamentablemente no contamos con líneas de crédito
                              para quienes no poseen demostración de ingresos
                              como recibo de sueldo, monotributo, etc.
                              Lamentamos las molestias.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo:
                          "¿Por qué me rechazan si soy beneficiario ANSES?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              La aceptación de esta repartición queda a criterio de 
                              evaluación de la empresa. Disculpe las molestias.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Cómo recibo mi préstamo?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Una vez aprobada tu solicitud y luego del chequeo de seguridad 
                              de nuestros asesores, el préstamo se acredita en una cuenta 
                              bancaria a tu nombre.
                            </p>
                            <p className="ayuda-asterisco">
                              *Para saber qué es un CBU hacé&nbsp;
                              <span className="tooltip" ref={tooltip1}>
                                click aquí.
                                <Tooltip
                                  parent={tooltip1}
                                  text={
                                    <>
                                      En Argentina, se llama <b>CBU</b> a una
                                      Clave Bancaria Uniforme/Única.
                                      <br />
                                      Pero... ¿Qué es? Es un código público
                                      utilizado por los bancos para
                                      <b> identificar la cuenta</b> de sus
                                      clientes. Podemos decir que es similar a
                                      un "DNI bancario". &nbsp;Sirve para:
                                      <br />
                                      · Enviar y recibir transferencias en tu
                                      cuenta bancaria nacionales o
                                      internacionales.
                                      <br />· Permite adherirte al pago de
                                      impuestos y servicios por débito
                                      automático
                                    </>
                                  }
                                />
                              </span>
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Cuánto dinero puedo solicitar?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Nuestros montos mínimos y máximos se encuentran
                              expuestos en el pie de página, las aprobaciones
                              dependerán del análisis crediticio* de nuestros
                              asesores.
                            </p>
                            <p className="ayuda-asterisco">
                              *Lo obtenemos gracias al&nbsp;
                              <Link
                                to={"//www.bcra.gob.ar/default.asp"}
                                style={{ color: "#FFF" }}
                                target="_blank"
                              >
                                BCRA
                              </Link>
                              , para conocer más sobre el análisis hacé&nbsp;
                              <span
                                className="tooltip calificacion"
                                ref={tooltip2}
                              >
                                click aquí.
                                <Tooltip
                                  parent={tooltip2}
                                  text={
                                    <>
                                      La calificación crediticia es una
                                      evaluación que determina un puntaje o
                                      valor, y de esta forma, permtie saber si
                                      el cliente tendrá la solvencia para pagar
                                      un crédito.
                                      <br />
                                      Esta información es pública y gratuita,
                                      pertenece al BCRA.
                                      <br />
                                      Para más información, podes consultar el
                                      siguiente&nbsp;
                                      <Link
                                        to={
                                          "//www.bcra.gob.ar/BCRAyVos/Situacion_Crediticia.asp"
                                        }
                                        style={{ color: "#FFF" }}
                                        target="_blank"
                                      >
                                        link
                                      </Link>
                                    </>
                                  }
                                />
                              </span>
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Qué tasa de interés tiene mi préstamo?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              La tasa depende del riesgo crediticio del
                              solicitante y el análisis completo del asesor,
                              pero podrás ver las tasas vigentes en nuestra web
                              o en el siguiente botón
                              <Link
                                className="ayuda-link-info-usuario"
                                to="/info-usuario"
                                style={{ color: "#FFF" }}
                              >
                                INFO&nbsp;USUARIO
                              </Link>
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Se cobran gastos de otorgamiento?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              No, nuestros prestamos NO TIENEN GASTOS ocultos,
                              ni cobros por adelantados, se acredita lo
                              acordado.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Cuándo puedo renovar mi préstamo?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              En Credlap podrás renovar tu préstamo, ya que
                              apoyamos a nuestros clientes a seguir creciendo,
                              podrás hacerlo luego del pago del 50% del primer
                              préstamo, a partir del segundo crédito podes tener
                              vigentes todas las renovaciones que creas
                              necesarias.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Cómo firmo mi contrato?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              En Credlap S.A. trabajamos con Adobe, una empresa
                              internacional aprobada en Argentina por la Ley N°
                              25.506 de Firma Digital.
                            </p>
                            <p>
                              Tu contrato llega a tu correo electrónico, lees,
                              firmas y para finalizar, obtendremos una copia
                              generada automáticamente.
                            </p>
                          </div>
                        ),
                      },
                    ]}
                  />
                ),
              },
              {
                className: "ayuda-accordion-cuotas",
                titulo: "Cuotas y Pagos",
                contenido: (
                  <Accordion
                    showSeparator={true}
                    separatorClass="ayuda-subaccordion-separator"
                    imgCollapsed={imgCaretRightSmall}
                    imgExpanded={imgCaretDownSmall}
                    headerClassName="ayuda-subaccordion-header"
                    items={[
                      {
                        titulo: "¿En cuántas cuotas puedo pagar?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                            En el pie de página vas a poder visualizar el número de cuotas que podríamos ofrecerte.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Cuándo pago la primera cuota?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Dependiendo la fecha de otorgamiento: a los 30, 45
                              o hasta 60 días luego de hacerse efectivo,
                              teniendo en cuenta que de ser otorgado hasta el
                              dia 24 de cada mes, la primer cuota vencerá el mes
                              siguiente, y del día 25 en adelante, la primer
                              cuota vencerá al mes subsiguiente.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Qué tipo de cuota es?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Nuestras cuotas son ¡FIJAS Y EN PESOS SIEMPRE,
                              pase lo que pase!
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Dónde y cómo pago mi cuota?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                            Podés pagar tus cuotas a través de nuestra web, en la sección&nbsp;
                          
                              <a
                                href="https://www.credlap.com/paga-tu-cuota"
                                style={{ color: "#FFF" }}
                                // target="_blank"
                              >
                                Pagá tu cuota
                              </a>
                              , donde encontrarás nuestro chat con información detallada. Otra opción es a través de WhatsApp al 11-2617-0462 o haciendo&nbsp;
                              <Link
                                to={
                                  "//api.whatsapp.com/send?phone=" +
                                  "541126170462"
                                }
                                style={{ color: "#FFF" }}
                                target={"_blank"}
                              >
                                click aquí
                              </Link>
                              . Recordá que podés abonar tu cuota mediante el link de pago, utilizando cualquiera de las siguientes opciones: pago en efectivo a través de Rapipago o Pago Fácil, transferencia bancaria a nuestras cuentas o con tarjeta de débito o crédito.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Tengo recargos por atraso de pago?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                            Por cada día de atraso, se ejecutará un punitorio diario previamente estipulado en el contrato mutuo correspondiente, el cual podrás visualizar y leer antes de la firma. Además, recibirás una copia del mismo en tu correo electrónico.
                            </p>
                          </div>
                        ),
                      },
                    ]}
                  />
                ),
              },
              {
                className: "ayuda-accordion-nosotros",
                titulo: "Sobre nosotros",
                contenido: (
                  <Accordion
                    showSeparator={true}
                    separatorClass="ayuda-subaccordion-separator"
                    imgCollapsed={imgCaretRightSmall}
                    imgExpanded={imgCaretDownSmall}
                    headerClassName="ayuda-subaccordion-header"
                    items={[
                      {
                        titulo: "¿Quiénes somos?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Somos una empresa dedicada al otorgamiento de
                              prestamos personales digitales, 100% online, sin
                              papeles físicos, buscamos satisfacer tus
                              necesidades, te ofrecemos comodidad, velocidad,
                              seriedad y responsabilidad. Somos simples.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "¿Qué ofrecemos?",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Productos, servicios y préstamos personales,
                              siempre pensando en la satisfacción del cliente.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "Misión",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Somos una financiera con años de experiencia en el
                              rubro, dedicada a otorgar préstamos personales de
                              manera rápida y confidencial. Innovamos para
                              sostener un sistema que combina la inmediatez de
                              lo digital con la calidez de lo personal,
                              priorizando siempre la atención hacia nuestros
                              clientes.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "Visión",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Buscamos la versatilidad para poder adaptarnos al
                              contexto socioeconómico y así beneficiar siempre a
                              nuestros clientes.
                            </p>
                          </div>
                        ),
                      },
                      {
                        titulo: "Valores",
                        contenido: (
                          <div className="ayuda-subaccordion-text">
                            <p>
                              Pretendemos como valores fundamentales, la
                              confianza, atributo que consideramos importante
                              tanto en nuestros clientes, como en todo el equipo
                              de Credlap; la innovación, implementamos nuevas
                              experiencias de trabajo generando un cambio
                              positivo.
                            </p>
                          </div>
                        ),
                      },
                    ]}
                  />
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
