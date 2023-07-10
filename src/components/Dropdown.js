import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown({onClick, elements}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {elements.map((item, index) => {
          return (
            <li className={elements.length===index+1?'last': ''} key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => { setClick(false); onClick();}}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
