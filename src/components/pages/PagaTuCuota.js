import React from "react";
import "./PagaTuCuota.css";
import imgCocoPaga from "../../images/credlap-coco-paga-tu-cuota.png";
import imgPaga1 from "../../images/paga-img-1.png";
import imgPaga2 from "../../images/paga-img-2.png";
import imgPaga3 from "../../images/paga-img-3.png";
import pagoEfectivo from "../../images/credlap-pago-efectivo.png";
import pagoLink from "../../images/credlap-pago-link.png";
import pagoQR from "../../images/qr-2.png";
import pagoIconoCredLap from "../../images/icono-credlap.png";
import pagoTarjeta from "../../images/credlap-pago-tarjeta.png";
import pagoTransfer from "../../images/credlap-pago-transferencia.png";
// import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";
// import { useEffect } from "react";

export default function PagaTuCuota() {
  // useEffect(() => {
  //   insertChatBot("https://go.botmaker.com/rest/webchat/p/S1VILUNVZ5/init.js");

  //   return () => {
  //     deleteChatBot();
  //   };
  // }, []);

  return (
    <div className="paga">
      <div className="paga-first-section">
        <div className="paga-left-box">
          <p className="paga-label-1">Chateá con nosotros</p>
          <p className="paga-label-2">Pagá tu cuota o informá tu pago</p>
        </div>
        <div className="paga-right-box">
          <img src={imgCocoPaga} className="paga-img" alt="coco-paga"/>
        </div>
      </div>
      <div className="paga-second-section">
        <p className="paga-second-section-label">
          Tu pago en <span>3 simples pasos</span>
        </p>
        <div className="paga-second-section-boxes">
          <div className="paga-box-item">
            <div className="paga-box-item-step">1</div>
            <img
              src={imgPaga1}
              alt="Completá el formulario"
              className="paga-box-item-img"
            />
            <p className="paga-box-item-title">Pedí tu medio de pago</p>
            <p className="paga-box-item-desc">
              Solicitá el medio por el que querés pagar.
            </p>
          </div>
          <div className="paga-box-item">
            <div className="paga-box-item-step">2</div>
            <img
              src={imgPaga2}
              alt="Corroboramos tus datos"
              className="paga-box-item-img"
            />
            <p className="paga-box-item-title">Pagá como vos querés</p>
            <p className="paga-box-item-desc">
              Elegí tu medio de pago, ya sea con tarjetas, efectivo o
              transferencia.
            </p>
          </div>
          <div className="paga-box-item">
            <div className="paga-box-item-step">3</div>
            <img
              src={imgPaga3}
              alt="Te depositamos el dinero"
              className="paga-box-item-img"
            />
            <p className="paga-box-item-title">¡Listo!</p>
            <p className="paga-box-item-desc">
              El sistema registra automáticamente el pago.
            </p>
          </div>
        </div>
      </div>
      <div className="third-section-fondo">
        <div className="paga-third-section">
          <div className="paga-left-box">
            <p className="paga-third-section-label">
              Conocé nuestros medios de pago
            </p>
          </div>
          <div className="paga-third-section-medios">
            <div className="paga-right-box">
              <img className="medios-image" border="0" src={pagoEfectivo} alt="medios" />
              <img className="medios-image" border="0" src={pagoTarjeta} alt="medios"/>
              <img className="medios-image" border="0" src={pagoTransfer} alt="medios"/>
              <img className="medios-image" border="0" src={pagoLink} alt="medios"/>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth-section-fondo">
        <div className="paga-fourth-section">
          <div className="paga-left-box">
            <p className="paga-fourth-section-label">Pagá con QR al instante</p>
          </div>
          <div className="paga-fourth-section-medios">
            <div className="paga-right-box">
              <img className="medios-image-QR" border="0" src={pagoQR} alt="medios"/>
            </div>
            <div className="paga-qr-list">
              <div className="paga-qr-list-item">
                <div className="paga-qr-list-circle">
                  <span className="paga-qr-list-number">1</span>
                </div>
                <p className="paga-qr-list-label">
                  Escaneá el código QR con tu celu
                </p>
              </div>
              <div className="paga-qr-list-item">
                <div className="paga-qr-list-circle">
                  <span className="paga-qr-list-number">2</span>
                </div>
                <p className="paga-qr-list-label">
                  Ingresá el monto de tu cuota
                </p>
              </div>
              <div className="paga-qr-list-item">
                <div className="paga-qr-list-circle">
                  <span className="paga-qr-list-number">3</span>
                </div>
                <p className="paga-qr-list-label">
                  Hablanos al chat{" "}
                  <img
                    className="pago-icono-credlap"
                    src={pagoIconoCredLap}
                    alt="icono-credlap"
                  ></img>
                  , cargá tus datos y adjuntá tu comprobante
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
