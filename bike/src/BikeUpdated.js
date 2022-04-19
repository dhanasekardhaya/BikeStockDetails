import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { alter } from "./Bikearr";
import { Display } from "./BikeHome";
import { updateEdit } from "./Connect";


export const Update=(dhana)=>{

    const[pos, setPos]=useState(dhana.who)
    const[updateView,setUpdateView]=useState(false)

    const[person, setPerson]=useState({
        "bikeId":dhana.mention.bikeId,
        "bikeModelName":dhana.mention.bikeModelName,
        "bikeVariant":dhana.mention.bikeVariant,
        "bikeEngine":dhana.mention.bikeEngine,
        "bikeAverageMilage":dhana.mention.bikeAverageMilage,  
        "bikePrice":dhana.mention.bikePrice,
        "bikeQuantity":dhana.mention.bikeQuantity,
        "bikeColor":dhana.mention.bikeColor
    })

    useEffect(()=>{
        let wind=""
        person.bikeColor.map((content)=>{
            wind+=content+","
        })
        person.bikeColor=wind
    },[])

    const sucess=async()=>{
       // alter(pos,person)
       person.bikeColor=person.bikeColor.split(",")
      const h = await updateEdit(person)
        alert(h.data)
        window.location.assign("/")
        
    }
    

    const track=(manoj)=>{
        //console.log(manoj.target.value);
        // extraction
        const{name,value}=manoj.target
        setPerson(
            (prev)=>{
                return{
                    ...prev,
                    [name]:value
                }
            }
        )
    }
    return (
       
        <div className="container-fuild mt-4">
            {(updateView)?
            <>
            <Display/>
            </>
            :
            <>
        <div className="row justify-content-center">
            <h1 className="text-center text-danger display-5">Bike Updated Form</h1>
            <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-3">
            <div className="col justify-content-between">
                            <div className="col-md-6 col-sm-12">
                            <label>Bike Model Name</label>
                            <input type="text" 
                                name="bikeModelName" 
                               onChange={track}
                               value={person.bikeModelName}
                                placeholder="Name of the resource person"
                                className="form-control"
                            />
                        </div>
                        </div>
                        <div className="col justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Variant</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikeVariant}
                                    name="bikeVariant"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                            <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Engine</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikeEngine}
                                    name="bikeEngine"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                            <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Average Milage</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikeAverageMilage}
                                    name="bikeAverageMilage"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                            <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Price</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikePrice}
                                    name="bikePrice"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                           <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label className="me-2">Bike Quantity</label>
                                <select name="bikeQuantity" onChange={track} value={person.bikeQuantity}>
                    <option>--Please Select the Option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                            </div>
                            </div>
                            <div className="form-group">
                            <label>Bike Color</label>
                            <textarea className="form-control" 
                            name="bikeColor" onChange={track} value={person.bikeColor}>

                            </textarea>
                        </div>
                        <div className="mt-4 row justify-content-around">
                            <button onClick={sucess} className="col-2 btn btn-outline-success text-white">Change</button>
                            <button className="col-2 btn btn-outline-danger text-white">Cancel</button>
                        </div>
</div>
</div>
</>
            }

</div>

    )
}