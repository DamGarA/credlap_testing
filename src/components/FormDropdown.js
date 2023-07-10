import { useState } from 'react';
import './FormDropdown.css';

function FormDropdown(props) {
    const [dropdownValue, setDropdownValue] = useState("")
    function handleOnChange(event){
        setDropdownValue(event.target.value)
        props.onChange(event)
    }
    return (
        <div className={'form-dropdown-container ' + props.className}>
            <select
                className={dropdownValue? 'form-dropdown' : 'form-dropdown placeholder'}
                placeholder={props.placeholder}
                onChange={handleOnChange}
                defaultValue={dropdownValue}
                style={props.style}>
                {
                    props.placeholder && (
                        <option value="" hidden>{props.placeholder}</option>
                    )
                }
                {props.options && props.options.map((item, index) => {
                return (
                    <option value={item.value} key={index+1}>
                        {item.label}
                    </option>
                );
                })}
            </select>
            <div className='input-validation-container'>
                    {props.validation}
            </div>
        </div>
    );
}

export default FormDropdown;
