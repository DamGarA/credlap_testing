import { useRef } from "react";
import imgCaretDownWhite from '../images/caret-down-white.png'
import imgCaretRigth from '../images/caret-right.png'

const AccordionItem = ({ item, active, onToggle, className, headerClassName, imgCollapsed, imgExpanded, showSeparator, separatorClass }) => {

  const contentEl = useRef();

  const { titulo, contenido } = item;

  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button className={ 'button ' + headerClassName + ' ' + className} onClick={onToggle}>
        {titulo}
        <span className="control">
            {
                active 
                    ? <img src={imgExpanded? imgExpanded : imgCaretDownWhite} style={!imgExpanded? {width:'40px', marginTop:'10px'}: {}}/>
                    : <img src={imgCollapsed? imgCollapsed : imgCaretRigth} style={!imgCollapsed? {height:'40px', marginTop:'10px'}: {}}/>
            }
        </span>
      </button>
      <div
        ref={contentEl}
        className='answer_wrapper'
        
        style={
            active
            ? { maxHeight: '1000px'}
            : { height: '0px' }
        }
      >
        <div className="answer">
            {contenido}
        </div>
      </div>
      {
        showSeparator &&
            <hr className={separatorClass}/>
      }
    </li>
  );
};

export default AccordionItem;