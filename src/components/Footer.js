import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Footer.css";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import logoAfip from "../images/afip-sello.jpg";
import logoCace from "../images/cace.png";
import logoSb from "../images/sb.png";
import logoBcra from "../images/bcra.png";
import logoCamFintech from "../images/camara-arg-fintech.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="first-section">
        <div className="footer-left-box">
          <div className="links-container">
            <div className="links">
              <Link to="/" className="footer-link">
                INICIO
              </Link>
              <Link to="/paga-tu-cuota" className="footer-link">
                PAGÁ TU CUOTA
              </Link>
              <Link to="/ayuda" className="footer-link">
                AYUDA
              </Link>
              <Link to="/contacto" className="footer-link">
                CONTACTO
              </Link>
            </div>
            <div className="social">
              <Link
                to={"//www.facebook.com/credlap/"}
                className="social-link"
                target="_blank"
              >
                <FontAwesomeIcon icon={brands("facebook-f")} />
              </Link>
              <Link
                to={"//www.instagram.com/credlap/"}
                className="social-link"
                target="_blank"
              >
                <FontAwesomeIcon icon={brands("instagram")} />
              </Link>
              <Link
                to={"//www.twitter.com/Credlapoficial/"}
                className="social-link"
                target="_blank"
              >
                <FontAwesomeIcon icon={brands("x-twitter")} />
              </Link>
            </div>
            <div className="footer-mail">
              <a href="mailto:consultas@credlap.com">consultas@credlap.com</a>
            </div>
            <div className="footer-mail">
              <a href="08102200570">0810-220-0570</a>
            </div>
          </div>
          <div className="legal-container">
            <div className="links">
              <p className="footer-title">INSTITUCIONAL</p>
              <Link to="/nosotros" className="footer-link-sub">
                Nosotros
              </Link>
              <Link to="/nosotros/#cv" className="footer-link-sub">
                Dejanos tu CV
              </Link>
              <p className="footer-title">LEGAL</p>
              <Link to="/legal-tyc" className="footer-link-sub">
                Términos y condiciones
              </Link>
              <Link to="/legal-privacidad" className="footer-link-sub">
                Políticas de privacidad
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-right-box">
          <div className="footer-button-col">
            <Link to="/baja" className="form-button footer-button">
              Botón de baja o arrepentimiento
            </Link>
            <Link
              to={"//www.argentina.gob.ar/aaip/datospersonales"}
              target="_blank"
              className="form-button footer-button"
            >
              Protección de datos personales
            </Link>
            <Link to="/info-usuario" className="form-button footer-button">
              Información al usuario financiero
            </Link>
          </div>
          <div className="footer-button-col">
            <Link
              to={"//www.bcra.gob.ar/BCRAyVos/Regimen_de_transparencia.asp"}
              target="_blank"
              className="form-button footer-button"
            >
              Régimen de transparencia
            </Link>
            <Link to="/reclamos" className="form-button footer-button">
              Reclamos
            </Link>
          </div>
          <div className="footer-button-col logo-afip-container">
            <a
              href="http://qr.afip.gob.ar/?qr=_Ud1_-TlSOYCD3vKUBUU1w,,"
              target="_blank"
            >
              <img className="logo-afip" border="0" src={logoAfip} />
            </a>
          </div>
        </div>
      </div>
      <div className="second-section">
        <Link to={"//www.cace.org.ar/socio/credlap/"} target="_blank">
          <img className="logo-image" border="0" src={logoCace} />
        </Link>
        <Link to={"//sbsoftware.com.ar"} target="_blank">
          <img className="logo-image" border="0" src={logoSb} />
        </Link>
        <Link
          to={
            "//www.bcra.gob.ar/SistemasFinancierosYdePagos/Proveedores_no_financieros.asp"
          }
          target="_blank"
        >
          <img className="logo-image" border="0" src={logoBcra} />
        </Link>
        <Link to={"//camarafintech.org/socios/credlap/"} target="_blank">
          <img className="logo-image" border="0" src={logoCamFintech} />
        </Link>
      </div>
      <div className="third-section">
        <div className="condiciones-text">
          <p>
            Credlap pertenece a CREDLAP S.A. CUIT N° 30-71766090-7. Domicilio
            Legal: Calle 4 1620, La Plata, Buenos Aires, Argentina.
          </p>
          <p>
            Condiciones generales de préstamos: La Tasa Nominal Anual (TNA), la
            Tasa Efectiva Anual (TEA) y el Costo Financiero Total Efectivo Anual
            (CFTEA) varían según el perfil crediticio del solicitante del
            préstamo y plazo de financiación elegido. En todos los casos, la
            TNA, TEA y el CFT aplicable serán informados al momento de solicitud
            del préstamo y antes de su otorgamiento.
          </p>
          <p>
            Tasa Nominal Anual (TNA) sin IVA: Mínimo: 145,50% - Máximo: 310,50%
            | Costo Financiero Total Efectivo Anual (CFTEA) con IVA: Mínimo:
            417,72% - Máximo: 2542,12%, - Intereses punitorios diarios: Minimo
            :1% - Maximo: 2,5%.
          </p>
          <p>
            Ejemplo de préstamo: Monto solicitado de $10.000 a 12 meses | Cuota:
            $2.300,46 | Total a pagar: $27.605,50 (ejemplo sobre TNA S/IVA)
            ("Las tasas varían según riesgo crediticio de cada cliente, el
            ejemplo es una de las líneas vigentes de la compañía (CREDLAP
            GOLD)").
          </p>
          <p>
            El plazo mínimo de repago del préstamo es de 1 mes y el máximo de 24
            meses. Cuotas mensuales, iguales y consecutivas calculadas mediante
            el sistema de cuotas directa, que el cliente abonará mensualmente de
            manera voluntaria, o por los medios dispuestos en el contrato del
            préstamo. El monto mínimo de financiación es de $1.000 y el monto
            máximo de $100.000, en todo el territorio nacional.
          </p>
          <p>
            El cliente acepta términos y condiciones, y políticas de privacidad
            al momento de completar el formulario web, y sus futuras
            modificaciones, los mismos se encuentran actualizados para
            visualizarlos con anterioridad en www.credlap.com - Legales, y deben
            ser aceptados para continuar y efectivizar la operatoria.
          </p>
          <p>
            Credlap S.A. no cobra ningún tipo de gasto por adelantado, costos
            administrativos, seguros, ni comisiones, salvo en el caso de
            retrasos del pago donde se aplicará un punitorio diario y la empresa
            podrá incurrir en el recupero total de la deuda, y efectivizara una
            cuota compensatoria de usos del servicio, por cualquiera de los
            medios mencionados en el contrato de adhesión/mutuo, el cual se
            visualiza actualizado en: botón - información al usuario financiero
            - botón contrato de adhesión, ley 24.240 de defensa al consumidor.
          </p>
          <p>
            <b>
              El otorgamiento del préstamo está sujeto a evaluación crediticia.
            </b>
          </p>
          <p>
            <b>Actualización: 01/07/2023</b>
          </p>
        </div>
        <p className="tasas-text">
          CFTEA(s/IVA): tasa mínima 295,26%, tasa máxima 1488,66%
        </p>
        <p className="tasas-text">
          CFTEA (c/IVA): tasa mínima 417,72%, tasa máxima 2542,12%
        </p>
        <p className="derechos-text">
          Todos los derechos reservados
          <br></br>
          Credlap SA&nbsp;&nbsp;|&nbsp;&nbsp;2023
        </p>
        <p style={{ textAlign: "center" }}>
          Desarrollado por{" "}
          <a
            href="https://portfolio-dam-gar-a.vercel.app/"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            Damián García Abreu
          </a>{" "}
          /{" "}
          <a
            href="mailto:armendariz.ignacio@gmail.com"
            style={{ textDecoration: "none" }}
          >
            Ignacio Armendariz
          </a>
          <br />
          Diseñado por{" "}
          <a
            href="mailto:mailto:leila.seitz02@gmail.com"
            style={{ textDecoration: "none" }}
          >
            Leila Seitz
          </a>{" "}
          /{" "}
          <a
            href="mailto:luisebritobarg@gmail.com"
            style={{ textDecoration: "none" }}
          >
            Luis Eduardo Brito
          </a>
        </p>
      </div>
    </div>
  );
}
