import React from "react";

import "./social.css"
export const Social = (props) =>{
    return(
        <div className="socials">
            {props.items.map(item => (
                <div className="social" style={{background: item.clrBg}}>
                <h3 className="social__header">{item.title}</h3>
                <span className="social__procent">{item.procent}</span>
                <svg class="progress-ring" width="180" height="150">
                        <circle className="social__circle" stroke={item.clr} stroke-width="6" cx="100" cy="100" r="45"
                            fill="transparent"/>
                    </svg>
            </div>
            ))}
        </div>
    )
}

export default Social;