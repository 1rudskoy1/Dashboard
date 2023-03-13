import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authoriz } from "../action/user";
import Alert from "../components/alert/Alert";
import Search from "../components/navbar/search/Search";
import Social from "../components/social/Social";
import Statistics from "../components/statistics/Statistics";
import Tracker from "../components/tracker/Tracker";
import {GET_SKILLS} from "../redux/store.js"
import "./main.css"
const Main = () => {
    const skills = useSelector(state => state.skills)
    const [arraySocial, setSocial] = useState([{title:"Twitter", clrBg:"#e2fbd7", clr:"#367CE3", procent: "6%"}, {title:"Facebook", clrBg:"#ffe5d3", clr:"#ff3a29", procent: "37%"}, {title:"Instagram", clrBg:"#dddafe", clr:"#443af2", procent: "46%"}, {title:"Behance", clrBg:"#ccf8fe", clr:"#02a0fc", procent: "67%"}]);
    const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(authoriz());
  },[]);
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
                    <Social items = {skills}/>
                </div>
                <Statistics/>
            </div>
        </div>
    )
}

export default Main;