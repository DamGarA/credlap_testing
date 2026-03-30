import React from 'react';
import './CustomAlert.css';

const ICONOS = {
  warning: '⚠️',
  error: '❌',
  info: 'ℹ️',
};

export default function CustomAlert({ visible, mensaje, tipo = 'warning', onClose }) {
  if (!visible) return null;

  return (
    <div className="custom-alert-overlay" onClick={onClose}>
      <div className="custom-alert-box" onClick={(e) => e.stopPropagation()}>
        <div className={`custom-alert-icon ${tipo}`}>
          {ICONOS[tipo] || ICONOS.warning}
        </div>
        <p className="custom-alert-mensaje">{mensaje}</p>
        <button className="custom-alert-btn" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
