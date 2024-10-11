import React from "react";
import { ReactComponent as Sun } from "../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../assets/images/Moon.svg";
import "../assets/styles/DarkMode.css";

const DarkMode = () => {
    //setting dark mode
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme" , "dark");
        localStorage.setItem("selectedTheme","dark");
    };
    //setting light mode
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme" , "light");
        //storing the selected theme in local storage
        localStorage.setItem("selectedTheme","light");
    };

    const selectedTheme = localStorage.getItem("selectedTheme");
//on revisiting the website the theme willbe the same selected by the user last time
    if (selectedTheme === "dark"){
        setDarkMode();
    }
    const toggleTheme = (e) => {
        if(e.target.checked) {
            setDarkMode();
        }
        else {
         setLightMode();}
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
