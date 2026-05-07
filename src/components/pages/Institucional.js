import React from "react";

// HERO + ICONOS
import heroBg from "../../images/hero-institucional.png";
import iconGestion from "../../images/icon-gestion.png";
import iconTrayectoria from "../../images/icon-trayectoria.png";
import iconServicio from "../../images/icon-servicio.png";

import icon10 from "../../images/icon-10.png";
import iconCompromiso from "../../images/icon-compromiso.png";
import iconMarca from "../../images/icon-marca.png";

// IMAGEN MISION
import imgMision from "../../images/imagen-mision.png";

// CARRUSEL DE INVERSORES (RESPALDO)
import invBalanz from "../../images/Inversiones-balanz.png";
import invBrubank from "../../images/Inversiones-brubank.png";
import invBull from "../../images/Inversiones-bullmarket.png";
import invFrances from "../../images/Inversiones-frances.png";
import invFacimex from "../../images/Inversiones-facimex.png";
import invMP from "../../images/Inversiones-mp.png";
import invTelepagos from "../../images/Inversiones-telepagos.png";

// BAND/FOOTER ICONS
import iconEmail from "../../images/icono-mensaje.png";
import iconWhatsapp from "../../images/icono-whatsapp.png";

import "./Institucional.css";

export default function Institucional() {
  return (
    <div className="institucional page-container">
      {/* HERO */}
      <section className="hero-wrapper">
        <div
          className="hero-card"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="hero-title-bold">CREDLAP</span>{" "}
                <span className="hero-title-book">S.A.</span>
              </h1>

              <p className="hero-desc">
                Una sociedad que transforma ideas en realidades y construye
                valor en múltiples mercados.
              </p>
            </div>
          </div>
        </div>

        {/* METRIC CARDS UNDER HERO */}
        <div className="hero-metrics">
          {/* TARJETA 1 — AZUL OSCURO */}
          <div className="metric-card metric-darkblue">
            <img src={icon10} className="metric-icon" alt="" />
            <div className="metric-texts">
              <div className="metric-number">+10 AÑOS</div>
              <div className="metric-sub">de Trayectoria</div>
            </div>
          </div>

          {/* TARJETA 2 — NEGRA */}
          <div className="metric-card metric-black">
            <img src={iconMarca} className="metric-icon" alt="" />
            <div className="metric-texts">
              <div className="metric-number">MARCAS PROPIAS REGISTRADAS</div>
              <div className="metric-sub">estratégicas</div>
            </div>
          </div>

          {/* TARJETA 3 — TURQUESA */}
          <div className="metric-card metric-turquoise">
            <img src={iconCompromiso} className="metric-icon" alt="" />
            <div className="metric-texts">
              <div className="metric-number">COMPROMISO</div>
              <div className="metric-sub">con la excelencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRA VISION Y COMPROMISO */}
      <section className="vision-section">
        <div className="vision-inner">
          <div className="vision-text">
            <h2 className="vision-title">
              Nuestra Visión y<br />
              Compromiso
            </h2>
            <p className="vision-lead">
              CREDLAP S.A. impulsa el crecimiento a través de la diversificación
              estratégica y la excelencia operativa en cada sector.
            </p>
          </div>

          <div className="vision-icons">
            <div className="vision-icon-item">
              <img src={iconGestion} alt="Gestión 360°" />
              <div className="icon-label">
                <strong>Gestión</strong>
                <br />
                360°
              </div>
            </div>

            <div className="vision-icon-item">
              <img src={iconTrayectoria} alt="Trayectoria" />
              <div className="icon-label">
                <strong>Sólida</strong>
                <br />
                trayectoria
              </div>
            </div>

            <div className="vision-icon-item">
              <img src={iconServicio} alt="Servicio" />
              <div className="icon-label">
                <strong>Servicio</strong>
                <br />
                de calidad
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIONES / Cuentas / RESPALDO + CARRUSEL */}
      <section className="inversiones-respaldo">
        <div className="inv-grid">
          <div className="inv-col">
            <div className="inv-bar"></div>
            <h4 className="inv-title">Inversiones</h4>
            <p className="inv-subtitle">
              <br />
              Diversificación de Tenencias.
              <span className="inv-text">
                {" "}
                Incluyen acciones con potencial bursátil (nacional e
                internacional), capital en cauciones, bonos y otros instrumentos
                del mercado.
              </span>
            </p>
          </div>

          <div className="inv-col">
            <div className="inv-bar"></div>
            <h4 className="inv-title">Cuentas Remuneradas</h4>
            <p className="inv-subtitle">
              Operatividad Inmediata.
              <span className="inv-text">
                {" "}
                Fondos disponibles en cuentas remuneradas de bancos y billeteras
                virtuales de primera línea para satisfacer las necesidades de
                nuestros clientes.
              </span>
            </p>
          </div>

          <div className="respaldo-col">
            <h3 className="respaldo-title">Estrategia y respaldo financiero</h3>
            <p className="respaldo-subtitle">
              <span className="respaldo-text">Diversificación y solidez. </span>
              Gestionamos un
              <span className="respaldo-text">
                {" "}
                portafolio de inversiones propio,{" "}
              </span>
              garantizando{" "}
              <span className="respaldo-text"> máxima agilidad y control </span>
              con fondos internos.
            </p>

            <div className="respaldo-box">
              <div className="carousel-wrapper">
                <div className="carousel-track">
                  <img src={invBalanz} alt="Balanz" />
                  <img src={invBrubank} alt="Brubank" />
                  <img src={invBull} alt="BullMarket" />
                  <img src={invFrances} alt="Frances" />
                  <img src={invMP} alt="MercadoPago" />
                  <img src={invTelepagos} alt="Telepagos" />
                  <img src={invFacimex} alt="Facimex" />

                  {/* duplicados */}
                  <img src={invBalanz} alt="Balanz" />
                  <img src={invBrubank} alt="Brubank" />
                  <img src={invBull} alt="BullMarket" />
                  <img src={invFrances} alt="Frances" />
                  <img src={invMP} alt="MercadoPago" />
                  <img src={invTelepagos} alt="Telepagos" />
                  <img src={invFacimex} alt="Facimex" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISION */}
      <section className="mission-section" id="mision">
        <div className="mision-container">
          <div className="mission-inner">
            <div className="mission-image">
              <img src={imgMision} alt="Misión" />
            </div>
            <div className="mission-text">
              <p className="mission-title">NUESTRA MISIÓN:</p>
              <p className="mission-subtitle">Diversificación con Propósito</p>
              <p className="mission-body">
                CREDLAP S.A. es el{" "}
                <span className="holding-italic">holding</span> estratégico que
                unifica visiones ambiciosas en sectores de alto potencial.
              </p>
              <p className="mission-desc">
                Invertimos, gestionamos e impulsamos marcas que ofrecen calidad
                y confianza hacia nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND (dark blue) */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-left">
            <h2 className="band-title">
              CREDLAP <span className="band-sa">S.A.</span>
            </h2>
          </div>

          <div className="cta-band-center">
            <p className="band-cta">
              IMPULSÁ TU
              <br />
              PROYECTO
            </p>
          </div>

          <div className="cta-band-right">
            <a className="band-icon" href="mailto:administracion@credlap.com">
              <img src={iconEmail} alt="email" />
            </a>
            <a className="band-icon" href="https://wa.me/5491178312678" target="_blank" rel="noopener noreferrer">
              <img src={iconWhatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
        <div className="cta-band-divider"></div>
        <div className="cta-band-footer">
          Credlap SA | Todos los derechos reservados
        </div>
      </section>
    </div>
  );
}
