import React from "react";

// HERO + ICONOS
import heroBg from "../../images/hero-institucional.png";
import iconGestion from "../../images/icon-gestion.png";
import iconTrayectoria from "../../images/icon-trayectoria.png";
import iconServicio from "../../images/icon-servicio.png";

import icon10 from "../../images/icon-10.png";
import iconCompromiso from "../../images/icon-compromiso.png";
import iconMarca from "../../images/icon-marca.png";

// IMAGENES MARCAS DESTACADAS
import marcaCredlap from "../../images/marca-credlap.png";
import marcaMacedo from "../../images/marca-macedo.png";
import marcaAmarilla from "../../images/marca-amarilla.png";

// IMAGEN MISION
import imgMision from "../../images/imagen-mision.png";

// CARRUSEL DE INVERSORES (RESPALDO)
import invBalanz from "../../images/Inversiones-balanz.png";
import invBrubank from "../../images/Inversiones-brubank.png";
import invBull from "../../images/Inversiones-bullmarket.png";
import invFrances from "../../images/Inversiones-frances.png";
import invMP from "../../images/Inversiones-mp.png";
import invTelepagos from "../../images/Inversiones-telepagos.png";

// BAND/FOOTER ICONS
import iconEmail from "../../images/icon-email.png";
import iconWhatsapp from "../../images/icon-whatsapp.png";

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
              <h1 className="hero-title"><span className="hero-title-bold">CREDLAP</span> <span className="hero-title-book">S.A.</span></h1>

              <p className="hero-desc">
                Una sociedad que transforma ideas en
                <br />
                realidades y construye valor en múltiples
                <br />
                mercados.
              </p>

              <a href="/explorar-negocios" className="hero-cta">
                EXPLORAR NEGOCIOS
              </a>
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
      <div className="metric-number">3 MARCAS</div>
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
            <h2 className="vision-title">Nuestra Visión y<br />Compromiso</h2>
            <p className="vision-lead">
              CREDLAP S.A. impulsa el crecimiento a través de la diversificación estratégica y la excelencia operativa en cada sector.
            </p>
          </div>

          <div className="vision-icons">
            <div className="vision-icon-item">
              <img src={iconGestion} alt="Gestión 360°" />
              <div className="icon-label"><strong>Gestión</strong><br />360°</div>
            </div>

            <div className="vision-icon-item">
              <img src={iconTrayectoria} alt="Trayectoria" />
              <div className="icon-label"><strong>Sólida</strong><br />trayectoria</div>
            </div>

            <div className="vision-icon-item">
              <img src={iconServicio} alt="Servicio" />
              <div className="icon-label"><strong>Servicio</strong><br />de calidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIONES / Cuentas / RESPALDO + CARRUSEL */}
      <section className="inversiones-respaldo">
        <div className="inv-grid">
          <div className="inv-col">
            <h4 className="inv-title">Inversiones</h4>
            <p className="inv-text">
              Diversificación de tenencias. Incluyen acciones con potencial bursátil (nacional e internacional), capital en cauciones, bonos y otros instrumentos del mercado.
            </p>
          </div>

          <div className="inv-col">
            <h4 className="inv-title">Cuentas Remuneradas</h4>
            <p className="inv-text">
              Operatividad inmediata. Fondos disponibles en cuentas remuneradas de bancos y billeteras virtuales de primera línea para satisfacer las necesidades de nuestros clientes.
            </p>
          </div>

          <div className="respaldo-col">
            <h3 className="respaldo-title">Estrategia y respaldo financiero</h3>
            <p className="respaldo-text">
              Diversificación y solidez. Gestionamos un portafolio propio garantizando máxima agilidad y control con fondos internos.
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

                  {/* duplicados */}
                  <img src={invBalanz} alt="Balanz" />
                  <img src={invBrubank} alt="Brubank" />
                  <img src={invBull} alt="BullMarket" />
                  <img src={invFrances} alt="Frances" />
                  <img src={invMP} alt="MercadoPago" />
                  <img src={invTelepagos} alt="Telepagos" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS DESTACADAS */}
      <section className="marcas-section">
        <h2 className="section-title">Marcas Destacadas</h2>

        <div className="marcas-grid">
          <article className="marca-card-feature">
            <div className="marca-image-wrap">
              <img src={marcaCredlap} alt="Credlap" />
            </div>
            <div className="marca-body">
              <div className="marca-kicker">CREDLAP</div>
              <h3 className="marca-title">Inversión y Servicios Financieros</h3>
              <p className="marca-desc">Más de 10 años potenciando tu futuro con el crédito más simple.</p>
              <button className="marca-btn blue">VISITAR CREDLAP</button>
            </div>
          </article>

          <article className="marca-card-feature">
            <div className="marca-image-wrap">
              <img src={marcaMacedo} alt="Macedo" />
            </div>
            <div className="marca-body">
              <div className="marca-kicker">REFUGIO MACEDO</div>
              <h3 className="marca-title">Experiencia Gastronómica Única</h3>
              <p className="marca-desc">Sabor y armonía en el refugio perfecto en las afueras de La Plata.</p>
              <button className="marca-btn green">DESCUBRIR MACEDO</button>
            </div>
          </article>

          <article className="marca-card-feature">
            <div className="marca-image-wrap">
              <img src={marcaAmarilla} alt="Amarilla" />
            </div>
            <div className="marca-body">
              <div className="marca-kicker">CERVEZA AMARILLA</div>
              <h3 className="marca-title">Cerveza Artesanal con Carácter</h3>
              <p className="marca-desc">Pasión artesanal en cada pinta. Pequeña productora con estilos audaces.</p>
              <button className="marca-btn yellow">CONOCER AMARILLA</button>
            </div>
          </article>
        </div>
      </section>

      {/* MISION */}
      <section className="mission-section">
        <div className="mission-inner">
          <div className="mission-image">
            <img src={imgMision} alt="Misión" />
          </div>
          <div className="mission-text">
            <h3 className="mission-title">NUESTRA MISIÓN: <span>Diversificación con Propósito</span></h3>
            <p className="mission-body">
              CREDLAP S.A. es el holding estratégico que unifica visiones ambiciosas en sectores de alto potencial. Invertimos, gestionamos e impulsamos marcas que ofrecen calidad y confianza hacia nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BAND (dark blue) */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-left">
            <h2 className="band-title">CREDLAP S.A.</h2>
            <p className="band-sub">IMPULSÁ TU PROYECTO</p>
          </div>

          <div className="cta-band-right">
            <a className="band-icon" href="mailto:contacto@credlap.com"><img src={iconEmail} alt="email" /></a>
            <a className="band-icon" href="https://wa.me/"><img src={iconWhatsapp} alt="whatsapp" /></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="institucional-footer">
        <div className="footer-inner">Credlap SA | Todos los derechos reservados</div>
      </footer>
    </div>
  );
}
