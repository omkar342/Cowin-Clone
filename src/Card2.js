import React , {useRef , useState} from 'react'
import classes from "./Card2.module.css"
import SlotsList from './SlotsList';

function Card2() {
    var date = new Date();
    var today = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var exactDate = today + "-" + month + "-" + year;
    // console.log(today,month,year);

    const [pinCode , setPinCode] = useState(null);
    const [vaccineSlots , setVaccineSlots] = useState([]); 
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState("");
    var num = 0;
    let content = "All Vaccine Slots Will Appear Below This.";

    // const vaccineSlots = [
    //     {
    //         center_id : 1,
    //         name : "PMC P Dhanwantariclinicdhanor"
    //     },
    //     {
    //         center_id : 2,
    //         name : "KEM Hospital"
    //     }
    // ];

    const pin_codeRef = useRef('');

    function pinCodeChangeHandler(event){
        setPinCode(event.target.value);
        // console.log(pinCode);
    }

    function fetchVaccineSlots(event){
        event.preventDefault();
        console.log(++num);
        setIsLoading(true);
        // var link = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=411002&date=19-8-2021"
        fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pinCode + "&date=" + exactDate).then(response => {
            return response.json();
        }).then(data => {
            // var slotsArray = data.sessions;
            // console.log(slotsArray.pincode);
            // if (vaccineSlots.length==0){
            //     throw new error ("No Vaccination Slots Available.")
            // }
            var allVaccineSlots = data.sessions.map(allSlots => {
                return {
                    id : allSlots.center_id,
                    name : allSlots.name,
                    address : allSlots.address,
                    state_name : allSlots.state_name,
                    district_name : allSlots.district_name,
                    pincode : allSlots.pincode,
                    date : allSlots.date,
                    total_slots : allSlots.available_capacity,
                    fee : allSlots.fee,
                    min_age : allSlots.min_age_limit,
                    vaccine : allSlots.vaccine,
                    fee_type: allSlots.fee_type,
                    slots: allSlots.slots,
                    dose1: allSlots.available_capacity_dose1,
                    dose2: allSlots.available_capacity_dose2
                }
            });
            setVaccineSlots(allVaccineSlots);
            setIsLoading(false);
            console.log(++num);
            // console.log(2);
            // console.log(vaccineSlots);
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
            console.log(error.message);
        })
        // console.log(pinCode);
        // console.log(today,month,year);
        // console.log(exactDate);
        // console.log("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pinCode + "&date=" + exactDate);
    }

    // async function fetchVaccineSlots(event){
    //     event.preventDefault();
    //     setIsLoading(true);
    //     try{
    //         const response = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pinCode + "&date=" + exactDate)
    //         console.log(response.status);
    //         if (!response.ok){
    //             throw new error ("OPPS.....Something Went Wrong Plz try again later..")
    //         }
    //         // const data =  response.session.json();
    //         console.log(response);
    //         // const allVaccineSlots = data.sessions.map(allSlots => {
    //         //     return {
    //         //         id : allSlots.counter_id,
    //         //     }
    //         // });
    //         console.log(pinCode);
    //         console.log(today,month,year);
    //         console.log(exactDate);
    //         console.log("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pinCode + "&date=" + exactDate);
    //     }
    //     catch(error){
    //         setError(error.message);
    //     }
    //     setIsLoading(false);
    // }

    if (error && !isLoading) {
        content = <p>OPPS.....Something Went Wrong Plz try again later..</p>
    }

    // if (isLoading){
    //     content = <p>Loadin....c</p>
    // }

    // if (pinCode && pinCode.length === 6){
    //     content = <p>Invalid Pincode !</p>
    // }

    if (!isLoading && pinCode && vaccineSlots.length===0){
        content = "No Slots Available.";
        // console.log(0);
    }

    if (vaccineSlots.length>0){
        content = <SlotsList  vaccineSlots={vaccineSlots}/>
        // console.log(1);
    }

    // if (!error){
    //     // setError("");
    //     content = <p>Enter Your Pin-Code and Search for Vaccination Slots.</p>
    // }

    // if (isLoading){
    //     content = <p>Loading...!</p>
    // }

    return (
        <div>
            <div className={classes.card}>
                <div className={classes.card_heading}>
                    <h1>Check Your Nearest Vaccination Center And Slots Availability And Book Your Slot.</h1>
                </div>
                <form onSubmit={fetchVaccineSlots}>
                    <div className={classes.card_content}>
                        <label htmlFor='pin_code'>Pin Code</label>
                        <p>Enter Your Pin-Code and Search for Vaccination Slots.</p>
                        <input id='pin_code' onChange={pinCodeChangeHandler} ref={pin_codeRef} placeholder="Enter Your Pincode..."/>
                        <button>Search</button>
                    </div>
                </form>
                <div className={classes.vaccine_slots}>
                    {isLoading && <p>Loading...</p>}
                    {!isLoading && error ? "OPPS.....Something Went Wrong Plz try again later.." : content}
                </div>
            </div> 
        </div>
    )
}

export default Card2
