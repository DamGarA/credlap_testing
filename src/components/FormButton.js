import './FormButton.css'

export default function FormButton(props) {
    return (
        <button 
            className={'form-button ' + props.className + (props.disabled? ' disabled' : '')}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.label}</button>
    )
}