import React from 'react'
import classes from "./Header.module.css";
import medical from "./assets/medical.png";

function Header() {
    return (
    <div className={classes.navbar}>
        <div className={classes.ministry}>
            <img src={medical} alt="" />
            <a href="https://www.india.gov.in/">Ministry of Health and Family Welfare</a>
        </div>
        <div className={classes.amper_tag}>
            <a href="https://dashboard.cowin.gov.in/">Covid Vaccine Dashboard</a>
        </div>
    </div>
    )
}

export default Header
