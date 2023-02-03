import React from "react";
import logo  from '../../assets/img/1176393.png'
import "./alert.css"
const Alert = () => {
    return(
        <div className="alert">
            <div className="alert-content">
                <img src={logo} alt="" />
                <div className="alert-text">
                    <h3 className="alert-text__header">Creative outdoor ads</h3>
                    <p className="alert-text__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga dolore ipsam nulla, sapiente, sit impedit eius explicabo atque incidunt culpa doloremque.</p>
                </div>
                <button className="alert-content__btn">See more</button>
            </div>
        </div>
    )
}


export default Alert;