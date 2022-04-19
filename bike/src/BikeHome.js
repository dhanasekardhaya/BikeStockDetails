import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import {del, fetchExact, List } from "./Bikearr";
import { Bikeadd } from "./Bikeform";
import { Read } from "./BikeRead";
import { Update } from "./BikeUpdated"; 
import { detail, removed, show } from "./Connect";

export const Display=()=>{

    const [tArr, setArr]=useState([])
    const [createView, setView]=useState(false)
    const[readView,setReadView]=useState(false)
    const[updateView,setUpdateView]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({})

    const hello=async()=>{
        const t = await show();
        setArr(t.data)
    }

    const erase=async(value)=>{
       const er = await removed(value)
       alert(er.data)
       window.location.assign("/")
    }
    
    
    useEffect(()=>{
        hello()
    },[])
    return(

        <div className="container-fuild bg-secondary mt-4">
        {(createView)?
                <>
                    <Bikeadd/>
                </>
                :
                (readView)?
                <>
                <Read who={pos}/>
                </>
:
                (updateView)?
                <>
                <Update mention={obj}/>
                </>
                :
                <>
                <button className="text-white btn btn-outline-success mb-3 mt-3"
                        onClick={
                            ()=>{
                                setView(true)
                            }
                        }>
                        <i class="bi bi-bicycle"></i> New Bike Add
                    </button>
                <h1 className="text-center mt-2"><i class="bi bi-bicycle"></i> Bike Stock Details</h1>
                <div className="col-lg-12 col-md-10 col-sm-12 mt-2 p-2">
                    <table className="table table-hover table-dark text-center me-2 shadow rounded">
                        <thead>
                            <tr>
                        <th>Bike Model Name</th>
                        <th>Bike Variant</th>
                        <th>Bike Engine CC</th>
                        <th>Bike Average Milage</th>
                        <th>Bike Price</th>
                        <th>Bike Quantity</th>
                        <th>Bike Color</th>
                        <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {tArr.map((ele, index)=>(
                                <tr>
                                    <td>{ele.bikeModelName}</td>
                                    <td>{ele.bikeVariant}</td>
                                    <td>{ele.bikeEngine}</td>
                                    <td>{ele.bikeAverageMilage}</td>
                                    <td>{ele.bikePrice}</td>
                                    <td>{ele.bikeQuantity}</td>
                                    <td>{ele.bikeColor}</td>
                                    <td>
                                    <td>
                                    <button className="btn btn-outline-primary me-4" onClick={()=>{
                            setReadView(true)
                            setPos(ele.bikeId)
                            //detail(ele)
                        }
                    }>
                                                    <i class="bi bi-eye"></i>
                                            </button>
                                            <button className="btn btn-outline-warning me-4" onClick={()=>{
                                                    setUpdateView(true)
                                                   // setPos(index)
                                                   // const y=fetchExact(ele.bikeModelName)
                                                    setObj(ele)
                                                }}>
                                                    <i class="bi bi-eyedropper"></i>
                                                </button>
                                            <button className="btn btn-outline-danger" 
                                            onClick={()=>{
                                                erase(ele.bikeId)

                                            }}>
                                                    <i class="bi bi-trash"></i>
                                                </button>
                                            </td>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
                </>
}
            </div>
        
    )
}