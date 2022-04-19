import React, { useEffect, useState } from "react";
import { read} from "./Bikearr";
import { Display } from "./BikeHome";
import { detail } from "./Connect";

export const Read=(arthi)=>{
    const [employee, setEmployee]=useState({
        "bikeId":0,
        "bikeModelName":"",
        "bikeVariant":"",
        "bikeEngine":"",
        "bikeAverageMilage":"",
        "bikePrice":"",
        "bikeQunatity":"",
        "bikeColor":[]


    })
    const[createView, setView]=useState(false)
    useEffect(()=>{
        callReading()
    })
    const callReading=async()=>{
       const sh= await detail(arthi.who)
        setEmployee(sh.data)
    }
    const back=()=>{
        setView(true)
        window.location.assign("/")
    }

    return(
        
        <div className="container mt-5">
            {(createView)?
            <>
            <Display/>
            </>
            :
            <>
                <div className="row justify-content-center container-fuild">
                    <div className="card col-lg-7 col-md-10 col-sm-12 p-4 bg-info text-light">
                        <h1 className="card-title text-center"><i class="bi bi-bicycle"></i> Bike View</h1>
                        
                        <div className="card-body p-2 text-black font-monospace">
                        <p className="float-start">
                        <img src="images/bikeview.jpg" hegiht="50px" width="200px" alt="bike"/></p>
                        <p className="text-center"><label className="me-2">Bike Model Name :</label>{employee.bikeModelName}</p>
                        <p className="text-center"><label>Bike Variant :</label>{employee.bikeVariant}</p>
                        <p className="text-center"><label>Bike Engine :</label>{employee.bikeEngine}</p>
                        <p className="text-center"><label>Bike Milage :</label>{employee.bikeAverageMilage}</p>
                        <p className="text-center"><label>Bike Price :</label>{employee.bikePrice}</p>
                        <p className="text-center"><label>Bike Color :</label>{employee.bikeColor}</p>
                        </div>
                        <button onClick={back} className="btn btn-rounded">Main Menu</button>
                    </div>
                </div>
                </>
}
            </div>
    )
}