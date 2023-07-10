import './Opinion.css'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Opinion(props) {
    const estrellas = props.estrellas? props.estrellas : 5
    return (
        <div className='opinion-container'>
            <div className='opinion-cloud'>
                <div className='opinion-stars'>
                    {
                        Array.from(Array(estrellas)).map((_,i) => (
                            <FontAwesomeIcon key={i} icon={solid('star')} style={{color:'gold'}}/>
                        ))
                    }
                </div>
                {props.label}
                <hr className='opinion-separador' />
                <div className='opinion-autor'>
                    <label>{props.autor}</label>
                    <label>{props.lugar}</label>
                </div>
            </div>
        </div>
    )
}