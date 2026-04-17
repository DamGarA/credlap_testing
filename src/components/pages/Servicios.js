import React, { useState } from "react";
// import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";
import "./Servicios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link, useNavigate } from "react-router-dom";

import imgPortada from "../../images/images_services/PORTADA.png";
import imgServicio1 from "../../images/images_services/FINANCIACION-ELECTRODOMESTICOS-FRENTE.png";
import imgServicio1Back from "../../images/images_services/FINANCIACION-ELECTRODOMESTICOS-DORSO.png";
import imgServicio2 from "../../images/images_services/FINANCIACION-MUBLERIA-FRENTE.png";
import imgServicio2Back from "../../images/images_services/FINANCIACION-MUBLERIA-DORSO.png";
import imgServicio4 from "../../images/images_services/FINANCIACION-TECNOLOGIA-FRENTE.png";
import imgServicio4Back from "../../images/images_services/FINANCIACION-TECNOLOGIA-DORSO.png";
import imgServicio5 from "../../images/images_services/FINANCIACION-EVENTOS-FRENTE.png";
import imgServicio5Back from "../../images/images_services/FINANCIACION-EVENTOS-DORSO.png";
import imgCarousel1 from "../../images/images_services/ASESORIA-CALCULADORA.png";
import imgCarousel2 from "../../images/images_services/ASESORIA-LEGAL.png";
import imgCarousel3 from "../../images/images_services/ASESORIA-ALIMENTARIA.png";
import imgCarousel4 from "../../images/images_services/ASESORIA-DEPORTIVA.png";
import imgCarousel5 from "../../images/images_services/ASESORIA-ODONTOLÓGICA.png";
import imgReintegroRotate from "../../images/images_services/REINTEGRO-CASAMIENTO.png";
import imgReintegro1 from "../../images/images_services/REINTEGRO-MEDICO-ICONO.png";
import imgReintegro2 from "../../images/images_services/REINTEGRO-CASAMIENTO-ICONO.png";
import imgReintegro3 from "../../images/images_services/REINTEGRO-MATERNIDAD-ICONO.png";
import imgReintegro4 from "../../images/images_services/REINTEGRO-DEFUNCION-ICONO.png";
import imgMuyPronto1 from "../../images/images_services/NUEVO-CARGADETRANSPORTE.png";
import imgMuyPronto2 from "../../images/images_services/NUEVO-RECARGACELULAR.png";
import imgMuyPronto3 from "../../images/images_services/NUEVO-PAGOFACTURA.png";

import Carousel from "react-simply-carousel";

export default function Servicios() {
  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/CMOA2RWID0/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);

  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlideIndex2, setActiveSlideIndex2] = useState(0);

  function handleSlideChange(newActiveSlideIndex) {
    setActiveSlideIndex(newActiveSlideIndex);
  }

  function handleSlideChange2(newActiveSlideIndex) {
    setActiveSlideIndex2(newActiveSlideIndex);
  }

  // Funciones de navegación a páginas separadas
  function navigateToCargaSube() {
    navigate("/carga-sube");
  }

  function navigateToRecargaSaldo() {
    navigate("/recarga-saldo");
  }

  function navigateToPagarFactura() {
    navigate("/pagar-factura");
  }

  return (
    <div className="servicios">
      <div className="servicios-first-section">
        <div className="servicios-left-box">
          <p className="servicios-label-1">
            ¡Sos parte del <span className="servicios-label-inner">club</span>!
          </p>
          <p className="servicios-label-2">
            ¿Sos cliente de Credlap? Descubrí todo lo que tenemos para vos
          </p>
        </div>
        <div className="servicios-right-box">
          <img
            src={imgPortada}
            className="servicios-img"
            alt="Imagen portada megafono"
          />
        </div>
      </div>
      <div className="servicios-muyPronto-section-fondo">
        <div className="servicios-muyPronto-section">
          <div className="servicios-muyPronto-left">
            <p className="servicios-muyPronto-label">100% recargado</p>
            <h2 className="servicios-muyPronto-title">
              <span className="italic-title">
                Resolvé todo en un mismo lugar
              </span>
            </h2>
          </div>

          <div className="servicios-muyPronto-right">
            <div className="servicio-item" onClick={navigateToCargaSube}>
              <div className="servicio-icon-circle">
                <img src={imgMuyPronto1} alt="Carga SUBE" />
              </div>
              <button className="servicio-pill">Cargar SUBE</button>
            </div>

            <div className="servicio-item" onClick={navigateToRecargaSaldo}>
              <div className="servicio-icon-circle">
                <img src={imgMuyPronto2} alt="Recargar saldo" />
              </div>
              <button className="servicio-pill">Recargar saldo</button>
            </div>

            <div className="servicio-item" onClick={navigateToPagarFactura}>
              <div className="servicio-icon-circle">
                <img src={imgMuyPronto3} alt="Pagar factura" />
              </div>
              <button className="servicio-pill">Pagar factura</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="servicios-second-section">
        <div className="servicios-second-section-label-box">
          <p className="servicios-second-section-label">
            Financia
            <span className="servicios-label-inner">
              {" "}
              tus productos y servicios
            </span>
          </p>
        </div>
        <div className="servicios-second-section-boxes">
          <div className="servicios-second-section-box">
            <img
              src={imgServicio1}
              alt="Servicio electrodoméstico"
              className="servicios-box-item-img-front"
            />
            <img
              src={imgServicio1Back}
              alt="Servicios Electro Dorso"
              className="servicios-box-item-img-back"
            />
          </div>
          <div className="servicios-second-section-box">
            <img
              src={imgServicio2}
              alt="Servicio muebleria"
              className="servicios-box-item-img-front"
            />
            <img
              src={imgServicio2Back}
              alt="Servicios Muebles Dorso"
              className="servicios-box-item-img-back"
            />
          </div>
          <div className="servicios-second-section-box">
            <img
              src={imgServicio4}
              alt="Servicio seguro"
              className="servicios-box-item-img-front"
            />
            <img
              src={imgServicio4Back}
              alt="Servicios Seguro Dorso"
              className="servicios-box-item-img-back"
            />
          </div>
          <div className="servicios-second-section-box">
            <img
              src={imgServicio5}
              alt="Servicio seguro"
              className="servicios-box-item-img-front"
            />
            <img
              src={imgServicio5Back}
              alt="Servicios Seguro Dorso"
              className="servicios-box-item-img-back"
            />
            <div className="servicios-box-links">
              <Link
                to={
                  "https://www.instagram.com/refugiomacedook?igsh=MjJrNnBvOWFobGJm"
                }
                className="servicio-contacto-btn servicio-instagram"
                target={"_blank"}
              >
                <FontAwesomeIcon
                  icon={brands("instagram")}
                  className="servicio-contacto-btn-icon"
                />
              </Link>
              <Link
                to={"https://www.facebook.com/share/1CfbeBvkGw/"}
                className="servicio-contacto-btn"
                target={"_blank"}
              >
                <FontAwesomeIcon
                  icon={brands("facebook")}
                  className="servicio-contacto-btn-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="servicios-third-section-fondo">
        <div className="servicios-third-section">
          <div className="servicios-third-section-left-box">
            <p className="servicios-third-section-label">Servicios</p>
          </div>

          <div className="servicios-carousel-header-desktop">
            <div className="servicios-carousel-header-desktop-item">
              <img
                src={imgCarousel1}
                alt="Imagen Carrousel 1"
                className="servicios-imagen-carousel-desktop"
              />
              <p className="servicios-carousel-desktop-title">
                Asesoria contable
              </p>
            </div>
            <div className="servicios-carousel-header-desktop-item">
              <img
                src={imgCarousel2}
                alt="Imagen Carrousel 2"
                className="servicios-imagen-carousel-desktop"
              />
              <p className="servicios-carousel-desktop-title">Asesoria legal</p>
            </div>
            <div className="servicios-carousel-header-desktop-item">
              <img
                src={imgCarousel3}
                alt="Imagen Carrousel 3"
                className="servicios-imagen-carousel-desktop"
              />
              <p className="servicios-carousel-desktop-title">
                Asesoria alimentaria
              </p>
            </div>
            <div className="servicios-carousel-header-desktop-item">
              <img
                src={imgCarousel4}
                alt="Imagen Carrousel 4"
                className="servicios-imagen-carousel-desktop"
              />
              <p className="servicios-carousel-desktop-title">
                Asesoria deportiva
              </p>
            </div>
          </div>
          <div className="servicios-third-section-items">
            <div className="servicios-third-section-box">
              <Carousel
                containerProps={{
                  className: "carousel-container"
                }}
                activeSlideIndex={activeSlideIndex}
                onRequestChange={handleSlideChange}
                itemsToShow={1}
                itemsToScroll={1}
                speed={400}
                forwardBtnProps={{
                  className: "carousel-btn-right"
                }}
                backwardBtnProps={{
                  className: "carousel-btn-left"
                }}
                innerProps={{
                  style: {
                    borderRadius: "20px"
                  }
                }}
              >
                <div className="servicios-carousel-container">
                  <div className="servicios-carousel-header">
                    <img
                      src={imgCarousel1}
                      alt="Imagen Carrousel 1"
                      className="servicios-imagen-carousel"
                    />
                    <p className="servicios-carousel-title">
                      Asesoria contable
                    </p>
                  </div>
                </div>
                <div className="servicios-carousel-container">
                  <div className="servicios-carousel-header">
                    <img
                      src={imgCarousel2}
                      alt="Imagen Carrousel 2"
                      className="servicios-imagen-carousel"
                    />
                    <p className="servicios-carousel-title">Asesoria legal</p>
                  </div>
                </div>
                <div className="servicios-carousel-container">
                  <div className="servicios-carousel-header">
                    <img
                      src={imgCarousel3}
                      alt="Imagen Carrousel 3"
                      className="servicios-imagen-carousel"
                    />
                    <p className="servicios-carousel-title">
                      Asesoria alimentaria
                    </p>
                  </div>
                </div>
                <div className="servicios-carousel-container">
                  <div className="servicios-carousel-header">
                    <img
                      src={imgCarousel4}
                      alt="Imagen Carrousel 4"
                      className="servicios-imagen-carousel"
                    />
                    <p className="servicios-carousel-title">
                      Asesoria deportiva
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="servicios-fourth-section-fondo">
        <div className="servicios-fourth-section">
          <div className="servicios-third-section-left-box">
            <p className="servicios-third-section-label">Reintegros</p>
          </div>
          <div className="servicios-fourth-section-horizontal-container">
            <div className="servicios-fourth-section-container">
              <div className="servicios-fourth-section-item">
                <img
                  src={imgReintegroRotate}
                  className="servicios-fourth-section-rotate-img"
                  alt="Imagen Reintegro"
                ></img>
              </div>
              <div className="servicios-fourth-section-center">
                <img
                  className="servicios-fourth-section-center-img"
                  src={imgReintegro1}
                  alt="Imagen Reintegro"
                />
                <p className="servicios-fourth-section-center-text">Médicos</p>
              </div>
            </div>
            <div className="servicios-fourth-section-container">
              <div className="servicios-fourth-section-item">
                <img
                  src={imgReintegroRotate}
                  className="servicios-fourth-section-rotate-img"
                  alt="Imagen Reintegro"
                ></img>
              </div>
              <div className="servicios-fourth-section-center">
                <img
                  className="servicios-fourth-section-center-img"
                  src={imgReintegro2}
                  alt="Imagen Reintegro"
                />
                <p className="servicios-fourth-section-center-text">
                  Casamiento
                </p>
              </div>
            </div>
            <div className="servicios-fourth-section-container">
              <div className="servicios-fourth-section-item">
                <img
                  src={imgReintegroRotate}
                  className="servicios-fourth-section-rotate-img"
                  alt="Imagen Reintegro"
                ></img>
              </div>
              <div className="servicios-fourth-section-center">
                <img
                  className="servicios-fourth-section-center-img"
                  src={imgReintegro3}
                  alt="Imagen Reintegro"
                />
                <p className="servicios-fourth-section-center-text">
                  Maternidad
                </p>
              </div>
            </div>
            <div className="servicios-fourth-section-container">
              <div className="servicios-fourth-section-item">
                <img
                  src={imgReintegroRotate}
                  className="servicios-fourth-section-rotate-img"
                  alt="Imagen Reintegro"
                ></img>
              </div>
              <div className="servicios-fourth-section-center">
                <img
                  className="servicios-fourth-section-center-img"
                  src={imgReintegro4}
                  alt="Imagen Reintegro"
                />
                <p className="servicios-fourth-section-center-text">
                  Defunción
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="servicios-fifth-section">
        <p className="servicios-fifth-section-text">
          Para acceder, consultar tu aprobación, disponibilidad, informarte o
          categorizar el servicio, podés contactarte por nuestro chatbot.
          <br></br>
          Activación de servicios: Los servicios se activan con el primer pago
          de los mismos, son obtenidos por solicitud personal o por el
          incurrimiento en mora de otros servicios contraídos, los vencimientos
          incumplidos activan los servicios en su totalidad, en tal caso los
          servicios se cobrarán desde la fecha de alta hasta la solicitud de
          baja, teniendo como mínimo de pago 12 cuotas y máximo hasta la
          solicitud de baja. El mutuo contraído y cancelado no exime al titular
          del cobro de las cuotas de servicio, Credlap® analizará pagos en
          término y tomará la decisión de aplicar las cuotas correspondientes
          entre los mínimos y máximos estipulados.
          <br></br>
          Valor del servicio $19999,99.
        </p>
        <Link
          to={
            "https://workdrive.zohoexternal.com/external/5fc94b3c29bbe85da3bb9695e4e5d12ffe09da8f09a92508e6d6a0bb52a15066"
          }
          className="servicio-link-pdf"
          target={"_blank"}
        >
          Ver aceptación de los servicios
        </Link>
      </div>
    </div>
  );
}
