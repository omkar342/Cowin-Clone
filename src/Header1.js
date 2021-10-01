import React from 'react'
import classes from "./Header1.module.css";
import astrazenca from "./assets/astrazeneca.png"

function Header1() {
    return (
        <div>
            <div className={classes.navbar1}>
                <img src={astrazenca} alt="" />
                <div className={classes.amper_tag}>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Header1
