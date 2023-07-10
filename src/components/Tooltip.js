import { useEffect, useState } from 'react'
import './Tooltip.css'

export default function Tooltip(props) {
    const [leftPadding, setLeftPadding] = useState(getLeftPadding(props.parent))
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    useEffect(() => {
        handleResize();
    }, [props.parent]);


    function handleResize(){
        setLeftPadding(getLeftPadding(props.parent))
    }

    function getLeftPadding(element){
        if (!element.current)
            return { left: '0px' }
        
        var rect = element.current.getBoundingClientRect();
        var leftPadding = rect.left;
        var rightPadding = window.innerWidth - rect.right;
        if (leftPadding < rect.width )
            return { left: -leftPadding + rect.width + 'px' }

        if (rightPadding < 150 )
            return { left: -200+rightPadding + 'px' } //-200 Porque es el ancho que se le dió defecto del tooltip
        
        return { left: -rect.width }
    }

    return (
        <span className='tooltip-text' style={leftPadding}>
            {props.text}
        </span>
    )
}