import './FormInput.css'

export default function FormInput(props) {
    return (
        <div className={'form-input-container ' + props.className}>
            <input 
                className='form-input'
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                type={props.type? props.type : 'text'}
                maxLength={props.maxLength}
                max={props.max}
                onKeyDown={(e) => props.type==='number' && ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
            />
            <div className='input-validation-container'>
                {props.validation}
            </div>
        </div>
    )
}