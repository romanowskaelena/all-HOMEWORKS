import React, { useState } from 'react'


const DropdownSelect = ({ labels, onSelect }) => {
    const [isToggle, setIsToggle] = useState(false);
    const activeLabel = labels && labels.find(item => item.selected)?.label;

     
    return (
        <div className="dropdown">
          <div className="dropdown__label" onClick={() => setIsToggle(!isToggle)}>
            <span> {activeLabel} </span> 
            <span> {!isToggle ? "+" : "-"} </span> 
          </div>

            {
                isToggle && (
                    <div className="dropdown__content">
                        <ul>
                        {
                            labels && labels.map(item => (
                                <li key={item.id} onClick={()=> onSelect(item)}>{item.label}</li>
                            )) 
                            // при нажатии на ли запускается онСелект для того item на который нажали
                        }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default DropdownSelect


