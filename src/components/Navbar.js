import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../images/logo.png";
import imgBarras from "../images/barras.png";
import imgCerrar from "../images/cerrar.png";
import { MenuInfo, MenuLegal } from "./MenuItems";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setDropdown(false);
    setClick(false);
  };
  const navbarRef = useRef(null);
  useOutsideAlerter(navbarRef, click);

  const onMouseActivity = (isMouseOver, menu) => {
    if (isMouseOver && window.innerWidth > 1065) setDropdown(menu);
    if (!isMouseOver) setDropdown("");
  };

  const onMenuExpandibleClick = (menu) => {
    setDropdown(menu);
  };

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref, click) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          window.innerWidth < 1065 &&
          click &&
          ref.current &&
          !ref.current.contains(event.target)
        ) {
          setClick(!click);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchmove", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchmove", handleClickOutside);
      };
    }, [ref, click]);
  }

  return (
    <>
      <nav ref={navbarRef} className={click ? "navbar active" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} className="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {!click && <img src={imgBarras} alt="Expandir menú" />}
          {click && <img src={imgCerrar} alt="Cerrar menú" />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className={currentPath === "/" ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              INICIO
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/paga-tu-cuota"
              className={
                currentPath === "/paga-tu-cuota"
                  ? "nav-links active"
                  : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              PAGÁ TU CUOTA
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => onMouseActivity(true, "info")}
            onMouseLeave={() => onMouseActivity(false, "info")}
          >
            <div
              className={
                currentPath.includes("contacto") ||
                currentPath.includes("nosotros")
                  ? "nav-links expandible active"
                  : "nav-links expandible"
              }
              onClick={() => {
                dropdown === "info"
                  ? onMenuExpandibleClick("")
                  : onMenuExpandibleClick("info");
              }}
            >
              INFO &nbsp;
              {dropdown === "info" && <i className="fas fa-caret-down" />}{" "}
              {dropdown !== "info" && <i className="fas fa-caret-right" />}
            </div>
            {dropdown === "info" && (
              <Dropdown onClick={closeMobileMenu} elements={MenuInfo} />
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => onMouseActivity(true, "legal")}
            onMouseLeave={() => onMouseActivity(false, "legal")}
          >
            <div
              className={
                currentPath.includes("legal")
                  ? "nav-links expandible active"
                  : "nav-links expandible"
              }
              onClick={() => {
                dropdown === "legal"
                  ? onMenuExpandibleClick("")
                  : onMenuExpandibleClick("legal");
              }}
            >
              LEGAL &nbsp;
              {dropdown === "legal" && <i className="fas fa-caret-down" />}{" "}
              {dropdown !== "legal" && <i className="fas fa-caret-right" />}
            </div>
            {dropdown === "legal" && (
              <Dropdown onClick={closeMobileMenu} elements={MenuLegal} />
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/servicios"
              className={
                currentPath === "/servicios" ? "nav-links active" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              SERVICIOS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ayuda"
              className={
                currentPath === "/ayuda" ? "nav-links active" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              AYUDA
            </Link>
          </li>
          <li className="nav-item only-mobile">
            <Link
              to="/solicitar-prestamo"
              className={
                currentPath === "/solicitar-prestamo"
                  ? "nav-links active"
                  : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              SOLICITÁ TU PRÉSTAMO
            </Link>
          </li>
        </ul>
        <Link to="/solicitar-prestamo" className="only-web">
          <button className="btn">SOLICITÁ TU PRÉSTAMO</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
