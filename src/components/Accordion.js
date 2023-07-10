import AccordionItem from "./AccordionItem"
import './Accordion.css'
import { useState } from "react";

const Accordion = ({items, className, headerClassName, imgCollapsed, imgExpanded, showSeparator, separatorClass}) => {
    const [clicked, setClicked] = useState("0")

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0")
        }
        setClicked(index)
    }

    return (
        <ul className={'accordion ' + className}>
        {
            items.map((item, index) => (
                <AccordionItem
                    showSeparator={showSeparator}
                    separatorClass={separatorClass}
                    imgCollapsed={imgCollapsed}
                    imgExpanded={imgExpanded}
                    className={item.className}
                    headerClassName={headerClassName}
                    key={index}
                    item={item}
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                />
            ))
        }
        </ul>
    )
}

export default Accordion