import React, { useState, useEffect } from "react";
import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";
import "./Servicios.css";

import imgPortada from "../../images/images_services/PORTADA.png";
import imgServicio1 from "../../images/images_services/DESCUENTO-ELECTRO-10.png";
import imgServicio1Back from "../../images/images_services/DESCUENTO-ELECTRO-10-TXT.png";
import imgServicio2 from "../../images/images_services/DESCUENTO-MUEBLES-10.png";
import imgServicio2Back from "../../images/images_services/DESCUENTO-MUEBLES-10-txt.png";
import imgServicio3 from "../../images/images_services/DESCUENTO-SEGURO.png";
import imgServicio3Back from "../../images/images_services/DESCUENTO-SEGURO-DORSO.png";
import imgCarousel1 from "../../images/images_services/ASESORIA-CALCULADORA.png";
import imgCarousel2 from "../../images/images_services/ASESORIA-LEGAL.png";
import imgCarousel3 from "../../images/images_services/ASESORIA-ALIMENTARIA.png";
import imgCarousel4 from "../../images/images_services/ASESORIA-DEPORTIVA.png";
import imgReintegroRotate from "../../images/images_services/REINTEGRO-CASAMIENTO.png";
import imgReintegro1 from "../../images/images_services/REINTEGRO-MEDICO-ICONO.png";
import imgReintegro2 from "../../images/images_services/REINTEGRO-CASAMIENTO-ICONO.png";
import imgReintegro3 from "../../images/images_services/REINTEGRO-MATERNIDAD-ICONO.png";
import imgReintegro4 from "../../images/images_services/REINTEGRO-DEFUNCION-ICONO.png";

import Carousel from "react-simply-carousel";

export default function Servicios() {
  useEffect(() => {
    insertChatBot("https://go.botmaker.com/rest/webchat/p/CMOA2RWID0/init.js");

    return () => {
      deleteChatBot();
    };
  }, []);

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
        <p className="servicios-second-section-label">
          Tus cupones de
          <span className="servicios-label-inner"> descuento</span>
        </p>
        <div className="servicios-second-section-boxes">
          <img
            src={imgServicio1}
            alt="Servicio electrodoméstico"
            className="servicios-box-item-img-front"
          />

          <img
            src={imgServicio2}
            alt="Servicio muebleria"
            className="servicios-box-item-img-front"
          />

          <img
            src={imgServicio3}
            alt="Servicio seguro"
            className="servicios-box-item-img-front"
          />
          <div className="servicios-second-section-boxes-back">
            <img
              src={imgServicio1Back}
              alt="Servicios Electro Dorso"
              className="servicios-box-item-img-back"
            />
            <img
              src={imgServicio2Back}
              alt="Servicios Muebles Dorso"
              className="servicios-box-item-img-back"
            />
            <img
              src={imgServicio3Back}
              alt="Servicios Seguro Dorso"
              className="servicios-box-item-img-back"
            />
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
                alt="Imagen Carrousel 1"
                className="servicios-imagen-carousel-desktop"
              />
              <p className="servicios-carousel-desktop-title">Asesoria legal</p>
            </div>
            <div className="servicios-carousel-header-desktop-item">
              <img
                src={imgCarousel3}
                alt="Imagen Carrousel 1"
                className="servicios-imagen-carousel-desktop"
              />
              <p className="servicios-carousel-desktop-title">
                Asesoria alimentaria
              </p>
            </div>
            <div className="servicios-carousel-header-desktop-item">
              <img
                src={imgCarousel4}
                alt="Imagen Carrousel 1"
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
          categorizar el servicio podés contactarte por nuestro chat bot.
        </p>
      </div>
    </div>
  );
}
