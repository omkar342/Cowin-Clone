import React from "react";
import classes from "./SlotsList.module.css";
import Slots from "./Slots.js";

const  SlotsList = (props) =>{
    // console.log(props.vaccineSlots);
    // console.log(props.slots[0].name);
    // props.slots.map(slot => {
    //     console.log(slot.center_id);
    // })
    // props.vaccineSlots.forEach( (item , index)=>{
    //     console.log(item.id);
    //     // index++;
    // } )
  return (
    <div className={classes.slot_list}>
    <h1>All The Availabale Vaccine Slots.</h1>
      <ul className={classes.u_list}>
        {props.vaccineSlots.map(slot => {
            var index = 0;
            {/* console.log(slot.pincode); */}
            return (<Slots
                id={slot.id}
                name={slot.name}
                address={slot.address}
                state_name={slot.state_name}
                district_name={slot.district_name}
                pincode={slot.pincode}
                date={slot.date}
                total_slots={slot.total_slots}
                fee={slot.fee}
                min_age={slot.min_age}
                vaccine={slot.vaccine}
                fee_type={slot.fee_type}
                slots={slot.slots}
                dose1={slot.dose1}
                dose2={slot.dose2}
            /> )
        })}
        {/* <Slots id = {props.slots[0].center_id} name = {props.slots[0].name} /> */}
      </ul>
    </div>
  );
}

export default SlotsList;
