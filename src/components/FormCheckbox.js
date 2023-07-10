import './FormCheckbox.css'

export default function FormCheckbox(props) {
    return (
        <>
            <div className='form-checkbox-container'>
                <div className='input-checkbox-container'>
                    <input
                        type='checkbox'
                        className='input-checkbox'
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    />
                </div>
                <label className='label-checkbox'>{props.label}</label>
            </div>
            <div className='input-validation-container'>
                {props.validation}
            </div>
        </>
    )
}