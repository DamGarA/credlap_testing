import { useState, useRef, useEffect } from 'react';
import './FormCombobox.css';

/**
 * FormCombobox – campo de texto con lista de sugerencias desplegable.
 * Permite elegir de la lista O escribir cualquier valor libre.
 *
 * Props (compatibles con FormDropdown):
 *  - placeholder  : texto placeholder del input
 *  - options       : [{ label, value }]
 *  - value         : valor controlado (string)
 *  - onChange      : function(event) — event.target.value contiene el valor actual
 *  - validation    : mensaje/elemento de validación (igual que FormInput)
 *  - className     : clase extra para el contenedor
 *  - style         : estilos extra para el contenedor
 */
function FormCombobox({ placeholder, options = [], value = '', onChange, validation, className = '', style }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Filtrar opciones según lo que el usuario escribió
  const filtered = value
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(value.toLowerCase())
      )
    : options;

  // Emitir cambio de valor simulando un event nativo
  function emitChange(val) {
    onChange?.({ target: { value: val } });
  }

  // Cuando el usuario tipea en el input
  function handleInputChange(e) {
    emitChange(e.target.value);
    setOpen(true);
  }

  // Cuando el usuario selecciona una opción de la lista
  function handleSelect(optValue) {
    emitChange(optValue);
    setOpen(false);
  }

  // Alternar la lista al hacer clic en el caret
  function handleCaretClick(e) {
    e.preventDefault();
    setOpen(prev => !prev);
  }

  // Cerrar cuando se hace clic fuera del componente
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`form-combobox-container ${className}`}
      style={style}
    >
      <div className="form-combobox-input-wrapper">
        <input
          type="text"
          className={`form-combobox-input ${!value ? 'placeholder' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setOpen(true)}
          autoComplete="off"
        />
        {/* Caret igual al del FormDropdown */}
        <button
          type="button"
          className="form-combobox-caret"
          onMouseDown={handleCaretClick}
          tabIndex={-1}
          aria-label="Abrir lista"
        />
      </div>

      {open && filtered.length > 0 && (
        <ul className="form-combobox-list">
          {filtered.map((opt, i) => (
            <li
              key={i}
              className={`form-combobox-option ${opt.value === value ? 'selected' : ''}`}
              onMouseDown={(e) => {
                e.preventDefault(); // Evitar que el input pierda foco antes del click
                handleSelect(opt.value);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      <div className="input-validation-container">
        {validation}
      </div>
    </div>
  );
}

export default FormCombobox;
