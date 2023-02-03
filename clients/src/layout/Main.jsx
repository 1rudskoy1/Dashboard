import React from "react";
import Alert from "../components/alert/Alert";
import Search from "../components/navbar/search/Search";
import Tracker from "../components/tracker/Tracker";
const Main = () => {

    return (
        <div className="container">
            <Search/>
            <div className="header-main">
                <h1 className="header-main__head">Be single minded</h1>
            </div>
            <Tracker/>
            <Alert/>
        </div>
    )
}

export default Main;