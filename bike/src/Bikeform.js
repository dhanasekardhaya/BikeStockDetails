import React, {useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { Create } from "./Bikearr";
import { Display } from "./BikeHome";
import { join } from "./Connect";
//import "../node_modules/mystyles.css";

export const Bikeadd=()=>{

    const [tAdd, setAdd]=useState({
        "bikeModelName":"",
        "bikeVariant":"",
        "bikeEngine":"",
        "bikeAverageMilage":"",
        "bikePrice":"",
        "bikeQunatity":"",
        "bikeColor":new Array()
    })
    const[createView, setView]=useState(false)
    

    const tracks=(mm)=>{
        const{value}=mm.target
        tAdd.bikeColor.push(value)
    }

    const track=(sm)=>{
        const{name, value}=sm.target
        setAdd((old)=>{
            return{
                ...old,
                [name]:value

            }

        })

    }
    const add=async()=>{
        //alert("SucessFully")
        //Create(tAdd)
        setView(true)
        const cr = await join(tAdd);
        alert(cr.data)
        window.location.assign("/")
    }
    
    return(
        <div className="container-fuild bg-info">
        {(createView)?
                <>
                    <Display/>
                </>
                :
        <>
            
        
            <h1 className="text-center">Bike Details Form</h1>
        <div className="row">
		<div className="col-md-3">
            <div className="bg-img mt-2 p-3">
				<img src="./images/bikereg.jpg" alt="image" height="100%" width="100%" className="img-fuild mx-auto d-block"/>
                </div>
		</div>
		<div class="container-fuild col-md-9 p-3">
			<div class="contact-form col-lg-12 col-md-10 col-sm-12 text-white bg-secondary p-2">
            <div class="form-group">
				  <label class="control-label col-sm-4">Bike Model Name:</label>
				  <div class="col-sm-10">          
					<input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikeModelName}
                    placeholder="Enter First Name" 
                    name="bikeModelName"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Variant:</label>
				  <div class="col-sm-10">          
					<input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikeVariant}
                    placeholder="Enter Variant Name" 
                    name="bikeVariant"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Engine:</label>
				  <div class="col-sm-10">          
					<input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikeEngine}
                    placeholder="Enter Engine Name" 
                    name="bikeEngine"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Average Milage:</label>
				  <div class="col-sm-10">          
                  <input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikeAverageMilage}
                    placeholder="Enter Engine Name" 
                    name="bikeAverageMilage"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Price:</label>
				  <div class="col-sm-10">          
					<input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikePrice}
                    placeholder="Enter Bike Price" 
                    name="bikePrice"/>
				  </div>
                  </div>

                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Quantity:</label>
				  <div class="col-sm-10">          
                  <select name="bikeQuantity" onChange={track} value={tAdd.bikeQuantity}>
                    <option>--Please Select the Option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
				  </div>
                  </div>

                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Color:</label>
				  <div class="col-sm-10">          
                  
                  <input type="checkbox"
                  name="dance" 
                  onChange={tracks}
                  value="Red"/>Red
                  <input type="checkbox" className="ms-3"
                  name="Black" 
                  onChange={tracks}
                  value="Black"/>Black
                  <input type="checkbox" className="ms-3"
                  name="Grey" 
                  onChange={tracks}
                  value="Grey"/>Grey

				  </div>
                  </div>
                  <div class="form-group mt-2 ms-10 text-center">        
				  <div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-primary me-5" onClick={add}>Submit</button>

                    <button type="submit" class="btn btn-primary">Reset</button>
				  </div>
                  </div>
				
			</div>
		</div>
	</div>
    </>
}
    </div>
    
        
    )
}