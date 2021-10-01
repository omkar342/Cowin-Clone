import React from 'react';
import classes from "./Card1.module.css";
import poster from "./assets/vaccine-poster.png";

function Card1() {
    return (
        <div>
            <div className={classes.card}>
                <img src={poster} alt="" />
            </div>
        </div>
    )
}

export default Card1
