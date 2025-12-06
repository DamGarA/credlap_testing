import React, { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Solicitud from "./components/pages/Solicitud";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import PagaTuCuota from "./components/pages/PagaTuCuota";
import Contacto from "./components/pages/Contacto";
import TerminosYCondiciones from "./components/pages/TerminosYCondiciones";
import PoliticasDePrivacidad from "./components/pages/PoliticasDePrivacidad";
import Ayuda from "./components/pages/Ayuda";
import Baja from "./components/pages/Baja";
import InfoUsuario from "./components/pages/InfoUsuario";
import DefensaConsumidor from "./components/pages/DefensaConsumidor";
import imgWp from "./images/wp.png";
import imgLlamar from "./images/llamar.png";
import imgColgar from "./images/colgar.png";
import SolicitudResultado from "./components/pages/SolicitudResultado";
import Nosotros from "./components/pages/Nosotros";
import FormPBA from "./components/pages/FormPBA";
import Servicios from "./components/pages/Servicios";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    console.log(location.pathname);
    let elToScroll = document.getElementById(
      window.location.hash.replace("#", "")
    );
    if (elToScroll)
      elToScroll.scrollIntoView({
        behavior: "smooth",
      });
    else window.scroll({ top: 0, behavior: "smooth" });

    setTimeout(function () {
      if (window.$zoho && window.$zoho.salesiq) {
        window.$zoho.salesiq.reset();
        if (window.$zoho.salesiq.floatwindow)
          window.$zoho.salesiq.floatwindow.visible(
            location.pathname === "/solicitud-resultado" ? "show" : "hide"
          );
      }
    }, 2000);
  }, [location.pathname]);
  return children;
};
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paga-tu-cuota" element={<PagaTuCuota />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/legal-tyc" element={<TerminosYCondiciones />} />
          <Route path="/legal-privacidad" element={<PoliticasDePrivacidad />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/solicitar-prestamo" element={<Solicitud />} />
          <Route
            path="/solicitud-resultado"
            element={
              <SolicitudResultado resultado={urlParams.get("resultado")} />
            }
          />
          <Route path="/baja" element={<Baja />} />
          <Route path="/info-usuario" element={<InfoUsuario />} />
          <Route path="/reclamos" element={<DefensaConsumidor />} />
          <Route path="/nosotros/*" element={<Nosotros />} />
          <Route path="/form-pba" element={<FormPBA />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        <Footer />
        <div id="click2call" align="end">
          <a id="click2call_callbtn">
            <img src={imgLlamar} />
          </a>
          <a id="click2call_hupbtn">
            <img src={imgColgar} />
          </a>
          <div id="click2call_msgdiv"></div>
          <div style={{ visibility: "hidden", display: "none" }}>
            <input id="click2call_user" defaultValue="300" />
            <input
              id="click2call_domain"
              defaultValue="wamafego.grancentral.com.ar"
            />
            <input id="click2call_password" defaultValue="300@73ed" />
            <input id="click2call_number" defaultValue="100" />
            <input
              id="click2call_host"
              defaultValue="wss://webrtc.anura.com.ar:9084"
            />
          </div>
          <div id="media" style={{ visibility: "hidden", display: "none" }}>
            <video width={800} id="webcam" autoPlay="autoplay" hidden={true} />
          </div>
        </div>
        <div hidden>
          <Link
            to={"//api.whatsapp.com/send?phone=" + window.flotante.wsp}
            className="img-wp"
            target="_blank"
          >
            <img src={imgWp} />
          </Link>
        </div>
      </Wrapper>
    </Router>
  );
}
export default App;
