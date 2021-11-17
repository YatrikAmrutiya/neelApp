import { NONAME } from "dns";
import React,{Component,useEffect,useState} from "react";
import '../Form/Manufacture.css';

const Manufacturer = () => {


    const [selectedOpt,setSelectedOpt] = useState("");
        return(
            <>
            <select onChange={(e) => {setSelectedOpt(e.target.value);}}>
                <option selected disabled>-- Select --</option>
                <option value="batch" >New Batch</option>
                <option value="supplier">New Supplier</option>
            </select>
            <br /><br />
            <div>

                
                <div style={{display: selectedOpt == "batch" ? "block" : "none"}}>
                    <label>Batch Code:</label>
                    <input type="text" placeholder="Enter the new batch code" /><br />
                    <button>Choose File</button>

                    <label>Medicine:</label>
                    <input type="text" placeholder="Enter the medicine name" />
                    <br /><br />
                    <button>Submit</button>
                </div>
                <br /><br />
                <div style={{display: selectedOpt == "supplier" ? "block" : "none"}}>
                    <label>Add Supplier:</label>
                    <input type="text" placeholder="Enter the ethereum address of supplier" />

                    <label>Position:</label>
                    <input type="text" placeholder="Enter the supplier's position" />
                    <br /><br />
                    <button>Add</button>
                </div>
            </div>



            </>
        
        );
    }
    
export default Manufacturer;