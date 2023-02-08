import React, { useState } from "react";
import Alert from "../components/alert/Alert";
import Search from "../components/navbar/search/Search";
import Social from "../components/social/Social";
import Statistics from "../components/statistics/Statistics";
import Tracker from "../components/tracker/Tracker";
import "./main.css"
const Main = () => {
    const [arraySocial, setSocial] = useState([{title:"Twitter", clrBg:"#e2fbd7", clr:"#367CE3", procent: "67%"}, {title:"Facebook", clrBg:"#ffe5d3", clr:"#ff3a29", procent: "37%"}, {title:"Instagram", clrBg:"#dddafe", clr:"#443af2", procent: "46%"}, {title:"Behance", clrBg:"#ccf8fe", clr:"#02a0fc", procent: "67%"}])
    return (
        <div className="container">
            <Search/>
            <div className="header-main">
                <h1 className="header-main__head">Be single minded</h1>
            </div>
            <Tracker/>
            <div className="wrap-flex">
                <div>
                    <Alert/>
                    <Social items = {arraySocial}/>
                </div>
                <Statistics/>
            </div>
        </div>
    )
}

export default Main;