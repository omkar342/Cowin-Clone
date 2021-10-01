import React from 'react'
import classes from "./Slots.module.css";

const Slots = (props) => {
    // console.log(props);
    // console.log("Omkar");
    return (
        <li key={props.id} className={classes.slots}>
            <h2>{props.name}</h2>
            <p>{props.address} , {props.district_name} : {props.pincode}</p>
            <p>{props.date}</p>
            <div className={props.fee_type==="Paid" ? classes.fee_type + " " +classes.red : classes.fee_type + " " + classes.green}>
                <p>{props.fee_type}</p>
            </div>
            {props.min_age === "45" ? <p style={{color:"#BE0000"}}>{props.min_age}+ Only</p> : <p style={{color:"#161616"}}>{props.min_age}+ Only</p>}
            <div className={classes.vaccine}>
                {props.fee_type === "Paid" ? <p>{props.vaccine} : ₹{props.fee}</p> : <p>{props.vaccine} : Free</p> }
            </div>
            {props.total_slots === "0" ? <p style={{color:"#8D2828" , fontWeight:"bold"}}>Sry all Slots are Booked.Plz try again later.</p> : <div>
                <p>{props.total_slots} Total Doses Are Available.</p>
                <p>Dose1: {props.dose1}</p>
                <p>Dose2: {props.dose2}</p>
            </div>}
            {props.total_slots !== "0" ? <div className={classes.button}>{props.slots.map(slot => (
                <div className={classes.button}>{slot}</div>
            ) )}</div> : null}
        </li>
    );
};

export default Slots
