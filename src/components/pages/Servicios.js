import React, { useState, useEffect } from "react";
// import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";
import "./Servicios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

import imgPortada from "../../images/images_services/PORTADA.png";
import imgServicio1 from "../../images/images_services/FINANCIACION-ELECTRODOMESTICOS-FRENTE.png";
import imgServicio1Back from "../../images/images_services/FINANCIACION-ELECTRODOMESTICOS-DORSO.png";
import imgServicio2 from "../../images/images_services/FINANCIACION-MUBLERIA-FRENTE.png";
import imgServicio2Back from "../../images/images_services/FINANCIACION-MUBLERIA-DORSO.png";
import imgServicio3 from "../../images/images_services/FINANCIACION-PAGOS-FRENTE.png";
import imgServicio3Back from "../../images/images_services/FINANCIACION-PAGOS-DORSO.png";
import imgServicio4 from "../../images/images_services/FINANCIACION-TECNOLOGIA-FRENTE.png";
import imgServicio4Back from "../../images/images_services/FINANCIACION-TECNOLOGIA-DORSO.png";
import imgServicio5 from "../../images/images_services/FINANCIACION-VEHICULOS-FRENTE.png";
import imgServicio5Back from "../../images/images_services/FINANCIACION-VEHICULOS-DORSO.png";
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

import Carousel from "react-simply-carousel";

export default function Servicios() {
  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/CMOA2RWID0/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlideIndex2, setActiveSlideIndex2] = useState(0);

  function handleSlideChange(newActiveSlideIndex) {
    setActiveSlideIndex(newActiveSlideIndex);
  }

  function handleSlideChange2(newActiveSlideIndex) {
    setActiveSlideIndex2(newActiveSlideIndex);
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
      <div className="servicios-second-section">
        <div className="servicios-second-section-label-box">
          <p className="servicios-second-section-label">
            Financia
            <span className="servicios-label-inner"> tus productos y servicios</span>
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
              src={imgServicio3}
              alt="Servicio seguro"
              className="servicios-box-item-img-front"
            />
            <img
              src={imgServicio3Back}
              alt="Servicios Seguro Dorso"
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
          {/* <div className="servicios-second-section-box">
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
                to={"https://www.instagram.com/toptenrentacar/"}
                className="servicio-contacto-btn servicio-instagram"
                target={"_blank"}
              >
                <FontAwesomeIcon
                  icon={brands("instagram")}
                  className="servicio-contacto-btn-icon"
                />
              </Link>
              <Link
                to={"https://wa.me/5492944586083"}
                className="servicio-contacto-btn"
                target={"_blank"}
              >
                <FontAwesomeIcon
                  icon={brands("whatsapp")}
                  className="servicio-contacto-btn-icon"
                />
              </Link>
          </div> 
          </div> */}
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
            <div className="servicios-carousel-header-desktop-item">
              <img
                src={imgCarousel5}
                alt="Imagen Carrousel 5"
                className="servicios-imagen-carousel-desktop"
              />
              <p className="servicios-carousel-desktop-title">
                Asesoria odontológica
              </p>
            </div>
          </div>
          <div className="servicios-third-section-items">
            <div className="servicios-third-section-box">
              <Carousel
                containerProps={{
                  className: "carousel-container",
                }}
                activeSlideIndex={activeSlideIndex}
                onRequestChange={handleSlideChange}
                itemsToShow={1}
                itemsToScroll={1}
                speed={400}
                forwardBtnProps={{
                  className: "carousel-btn-right",
                }}
                backwardBtnProps={{
                  className: "carousel-btn-left",
                }}
                innerProps={{
                  style: {
                    borderRadius: "20px",
                  },
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
                <div className="servicios-carousel-container">
                  <div className="servicios-carousel-header">
                    <img
                      src={imgCarousel5}
                      alt="Imagen Carrousel 5"
                      className="servicios-imagen-carousel"
                    />
                    <p className="servicios-carousel-title">
                      Asesoria odontológica
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
        Para acceder, consultar tu aprobación, disponibilidad, informarte o categorizar el servicio, podés contactarte por nuestro chatbot.
        <br></br>
        Activación de servicios: Los servicios se activan con el primer pago de los mismos, son obtenidos por solicitud personal o por el incurrimiento en mora de otros servicios contraídos, los vencimientos incumplidos activan los servicios en su totalidad, en tal caso los servicios se cobrarán desde la fecha de alta hasta la solicitud de baja, teniendo como mínimo de pago 12 cuotas y máximo hasta la solicitud de baja. El mutuo contraído y cancelado no exime al titular del cobro de las cuotas de servicio, Credlap® analizará pagos en término y tomará la decisión de aplicar las cuotas correspondientes entre los mínimos y máximos estipulados.
        <br></br>
        Valor del servicio $19999,99.
        </p>
      </div>
    </div>
  );
}
