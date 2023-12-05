import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Home.css";
import { Link } from "react-router-dom";
import imgHomeBox1 from "../../images/home-box-1.png";
import imgHomeBox2 from "../../images/home-box-2.png";
import imgHomeBox3 from "../../images/home-box-3.png";
import imgCocoHome from "../../images/Credlap-navidad-DESKTOP.png";
import imgCocoHomeCelu from "../../images/Credlap-navidad-celu.png";
import imgSecondSectionBottom from "../../images/home-back-second-section-bottom.png";
import imgThirdSection1 from "../../images/home-third-section-1.png";
import imgThirdSection2 from "../../images/home-third-section-2.png";
import imgThirdSection3 from "../../images/home-third-section-3.png";
import Carousel from "react-simply-carousel";
import Opinion from "../Opinion";
import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  function handleSlideChange(newActiveSlideIndex) {
    setActiveSlideIndex(newActiveSlideIndex);
  }

  useEffect(() => {
    insertChatBot("https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js");

    return () => {
      deleteChatBot();
    };
  }, []);

  return (
    <div className="home">
      <div className="home-first-section">
        <div className="home-left-box">
          <p className="home-label">Llevate hasta</p>
          <p className="home-monto">{window.home.monto}</p>
          <Link to="solicitar-prestamo">
            <button className="home-btn">SOLICITÁ TU PRÉSTAMO</button>
          </Link>
        </div>
      </div>
      <div className="home-second-section">
        <img
          className="home-second-section-img-top"
          src={imgCocoHome}
          alt="Segunda sección"
        />
        <img
          className="home-second-section-img-top-mobile"
          src={imgCocoHomeCelu}
          alt="Segunda sección"
        />
        <div className="home-second-section-content">
          <p className="home-second-section-label">
            Tu préstamo en <span>3 simples pasos</span>
          </p>
          <div className="home-second-section-boxes">
            <div className="home-box-item">
              <div className="home-box-item-step">1</div>
              <img
                src={imgHomeBox1}
                alt="Completá el formulario"
                className="home-box-item-img"
              />
              <p className="home-box-item-title">Completa el formulario</p>
              <p className="home-box-item-desc">
                Elegí el monto que querés solicitar y completá con tus datos
                personales
              </p>
            </div>
            <div className="home-box-item">
              <div className="home-box-item-step">2</div>
              <img
                src={imgHomeBox2}
                alt="Corroboramos tus datos"
                className="home-box-item-img"
              />
              <p className="home-box-item-title">Corroboramos tus datos</p>
              <p className="home-box-item-desc">
                Nos comunicamos con vos y por tu seguridad corroboramos tus
                datos
              </p>
            </div>
            <div className="home-box-item">
              <div className="home-box-item-step">3</div>
              <img
                src={imgHomeBox3}
                alt="Te depositamos el dinero"
                className="home-box-item-img"
              />
              <p className="home-box-item-title">Te depositamos el dinero</p>
              <p className="home-box-item-desc">
                Te enviamos el dinero inmediatamente a tu cuenta. ¡Es simple!
              </p>
            </div>
          </div>
        </div>
        <img
          className="home-second-section-img-bottom"
          src={imgSecondSectionBottom}
          alt="Segunda sección"
        />
      </div>
      <div className="home-third-section">
        <p className="home-third-section-label">
          Te contamos nuestros requisitos.
        </p>
        <div className="home-third-section-boxes">
          <div className="home-third-section-box">
            <img
              src={imgThirdSection1}
              className="home-third-section-box-img"
              alt="DNI +18"
            />
            DNI +18
          </div>
          <div className="home-third-section-box">
            <img
              src={imgThirdSection2}
              className="home-third-section-box-img"
              alt="Cuenta Bancaria"
            />
            Cuenta Bancaria
          </div>
          <div className="home-third-section-box">
            <img
              src={imgThirdSection3}
              className="home-third-section-box-img"
              alt="Comprobante de ingreso"
            />
            Comprobante de ingreso
          </div>
        </div>
      </div>
      <div className="home-fourth-section">
        <p className="home-fourth-section-label">
          Opiniones de nuestros clientes
        </p>
        <div className="carousel-container-home-2items">
          <Carousel
            containerProps={{
              className: "carousel-container-home",
            }}
            activeSlideIndex={activeSlideIndex}
            onRequestChange={handleSlideChange}
            itemsToShow={2}
            itemsToScroll={1}
            speed={400}
            forwardBtnProps={{
              className: "carousel-btn-right-home",
            }}
            backwardBtnProps={{
              className: "carousel-btn-left-home",
            }}
          >
            <Opinion
              estrellas={5}
              label={window.home.opinion1.texto}
              autor={window.home.opinion1.autor}
              lugar={window.home.opinion1.lugar}
            />
            <Opinion
              estrellas={5}
              label={window.home.opinion2.texto}
              autor={window.home.opinion2.autor}
              lugar={window.home.opinion2.lugar}
            />
            <Opinion
              estrellas={5}
              label={window.home.opinion3.texto}
              autor={window.home.opinion3.autor}
              lugar={window.home.opinion3.lugar}
            />
            <Opinion
              estrellas={5}
              label={window.home.opinion4.texto}
              autor={window.home.opinion4.autor}
              lugar={window.home.opinion4.lugar}
            />
          </Carousel>
        </div>
        <div className="carousel-container-home-1items">
          <Carousel
            containerProps={{
              className: "carousel-container-home",
            }}
            activeSlideIndex={activeSlideIndex}
            onRequestChange={handleSlideChange}
            itemsToShow={1}
            itemsToScroll={1}
            speed={400}
            forwardBtnProps={{
              className: "carousel-btn-right-home",
            }}
            backwardBtnProps={{
              className: "carousel-btn-left-home",
            }}
          >
            <Opinion
              estrellas={5}
              label={window.home.opinion1.texto}
              autor={window.home.opinion1.autor}
              lugar={window.home.opinion1.lugar}
            />
            <Opinion
              estrellas={5}
              label={window.home.opinion2.texto}
              autor={window.home.opinion2.autor}
              lugar={window.home.opinion2.lugar}
            />
            <Opinion
              estrellas={5}
              label={window.home.opinion3.texto}
              autor={window.home.opinion3.autor}
              lugar={window.home.opinion3.lugar}
            />
            <Opinion
              estrellas={5}
              label={window.home.opinion4.texto}
              autor={window.home.opinion4.autor}
              lugar={window.home.opinion4.lugar}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
