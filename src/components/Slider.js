import ReactSlider from 'react-slider'
import './Slider.css'

export default function Slider(props) {
    return (
        <ReactSlider 
            className={'horizontal-slider ' + props.className}
            thumbClassName={'example-thumb ' + props.thumbClassName}
            trackClassName={'example-track ' + props.trackClassName}
            min={props.min}
            max={props.max}
            step={props.step}
            onChange={props.onChange}
            disabled={props.disabled}
            value={props.value}
        />
    )
}