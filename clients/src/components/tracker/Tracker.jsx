import React from "react";
import logo  from '../../assets/img/1176393.png'
import "./tracker.css"

const Tracker = () => {

    return (
        <div className="trackers">
            <div className="tracker">
                <div className="tracker-top">
                    <img src={logo} alt=""/>
                    <div className="wrap">
                        <div className="tracker-top__date">
                            <h3 className="date-header">Ava Gregoraci</h3>
                            <span className="date-city"> Bulgaria</span>
                        </div>
                        <div className="tracker-top__dots">
                            <span className="dots-dot"></span>
                            <span className="dots-dot"></span>
                            <span className="dots-dot"></span>
                        </div>
                    </div>
                </div>
                <div className="tracker-bottom">
                    <div className="tracker-skills">
                        <div className="tracker-skill skill-green">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Instagram</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild">
                                <div className="fild-filded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="tracker-skill skill-green">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Facebook</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild">
                                <div className="fild-filded"></div>
                            </div>
                        </div>
                        <div className="tracker-skill skill-green">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Twitter</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild ">
                                <div className="fild-filded"></div>
                            </div>
                        </div>
                    
                </div>
            </div>
            <div className="tracker">
                <div className="tracker-top">
                    <img src={logo} alt=""/>
                    <div className="wrap">
                        <div className="tracker-top__date">
                            <h3 className="date-header">Ava Gregoraci</h3>
                            <span className="date-city"> Bulgaria</span>
                        </div>
                        <div className="tracker-top__dots">
                            <span className="dots-dot"></span>
                            <span className="dots-dot"></span>
                            <span className="dots-dot"></span>
                        </div>
                    </div>
                </div>
                <div className="tracker-bottom">
                    <div className="tracker-skills skills-red">
                        <div className="tracker-skill">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Instagram</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild ">
                                <div className="fild-filded "></div>
                            </div>
                        </div>
                        <div className="tracker-skill">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Facebook</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild ">
                                <div className="fild-filded "></div>
                            </div>
                        </div>
                        <div className="tracker-skill">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Twitter</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild ">
                                <div className="fild-filded "></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="tracker">
                <div className="tracker-top">
                    <img src={logo} alt=""/>
                    <div className="wrap">
                        <div className="tracker-top__date">
                            <h3 className="date-header">Ava Gregoraci</h3>
                            <span className="date-city"> Bulgaria</span>
                        </div>
                        <div className="tracker-top__dots">
                            <span className="dots-dot"></span>
                            <span className="dots-dot"></span>
                            <span className="dots-dot"></span>
                        </div>
                    </div>
                </div>
                <div className="tracker-bottom">
                    <div className="tracker-skills skills-blue">
                        <div className="tracker-skill">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Instagram</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild ">
                                <div className="fild-filded "></div>
                            </div>
                        </div>
                        <div className="tracker-skill">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Facebook</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild ">
                                <div className="fild-filded "></div>
                            </div>
                        </div>
                        <div className="tracker-skill">
                            <div className="skill-header">
                                <h4 className="skill-header__head">Twitter</h4>
                                <span className="skill-header__text">65,376</span>
                            </div>
                            <div className="tracker-skill__fild ">
                                <div className="fild-filded "></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Tracker;