import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    return(
            <nav className='nav'>
                <ul className='nav-items'>
                    <NavLink to ='api/skills/cabinet'>
                    <li className='item-logo'>
                        <div className='item__link'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                        </div>
                        </li>
                    </NavLink>
                    <li className='item'>
                    <NavLink to ='api/skills/all'>
                        <div className='item__link item__link-active' href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-2.8-5.6-5.6-11.2-9.8-16.8l-50.6 58.8s-81.4-103.6-87.1-110.6C133.1 243.8 112 273.2 112 306.8C112 375.4 162.6 416 225.7 416z"/></svg>
                        </div>
                    </NavLink>
                    </li>
                    <li className='item'>
                        <div className='item__link' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M396.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
                        </div>
                    </li>
                    <li className='item'>
                        <div className='item__link' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                        </div>
                    </li>
                    <li className='item'>
                        <div className='item__link' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
                        </div>
                    </li>
                    <li className='item'>
                        <div className='item__link' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M392.9 32.43C400.6 31.1 408.6 32.89 414.1 37.41C498.2 96.14 544 173.7 544 255.1C544 338.2 498.2 415.9 414.1 474.6C409.3 478.6 402.4 480.5 395.5 479.9C388.5 479.3 382 476.3 377.1 471.4L193.7 288.7C188.1 283.2 185 275.7 184.1 267.8C184.1 260 188.1 252.5 193.6 246.9C199.2 241.4 206.7 238.2 214.5 238.2C222.4 238.2 229.9 241.3 235.4 246.8L400.5 411.2C455.1 366.5 484.8 312 484.8 255.1C484.8 193.5 447.9 132.9 380.9 85.76C374.5 81.24 370.1 74.35 368.8 66.62C367.4 58.89 369.2 50.94 373.8 44.53C378.3 38.12 385.2 33.77 392.9 32.43V32.43zM186.9 479.6C179.2 480.9 171.3 479.1 164.8 474.6C81.67 415.9 35.84 338.2 35.84 255.1C35.84 173.7 81.67 96.14 164.8 37.41C170.5 33.4 177.4 31.53 184.4 32.12C191.3 32.71 197.8 35.72 202.7 40.63L386.1 223.3C391.7 228.8 394.8 236.3 394.8 244.2C394.9 251.1 391.8 259.5 386.2 265.1C380.7 270.6 373.2 273.8 365.3 273.8C357.5 273.8 349.1 270.7 344.4 265.2L179.3 100.7C124.7 145.9 95.03 199.9 95.03 255.1C95.03 318.5 131.9 379.1 198.1 426.2C205.4 430.8 209.7 437.6 211.1 445.4C212.4 453.1 210.6 461.1 206.1 467.5C201.6 473.9 194.7 478.2 186.9 479.6V479.6z"/></svg>
                        </div>
                    </li>
                    <li className='item item-setting'>
                        <div className='item__link' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
                        </div>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar;