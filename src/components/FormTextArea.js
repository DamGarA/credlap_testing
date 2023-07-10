import './FormTextArea.css'

export default function FormTextArea(props) {
    return (
        <>
            <div className='form-textarea-container'>
                <textarea
                    className='form-textarea'
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    rows={props.rows? props.rows : 7}
                />
            </div>
            <div className='input-validation-container'>
                {props.validation}
            </div>
        </>
    )
}