import React from "react";
import "./search.css";
import { NavLink } from "react-router-dom";
import logo  from '../../../assets/img/7ad87a89fa581a7cab01f9c1e9c2ee53.jpg'
const Search = () => {
    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Search"/>
            <div className="avatars-icons">
                <div className="avatars-icons__icon">
                    <img src={logo} alt="" />
                </div>
                <NavLink to ='api/auth/auth'>
                    <div className="avatars-icons__icon avatars-icons__icon-plus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Search;