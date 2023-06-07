import React, { useState } from "react";
import "./styles/more.css";
import { MDBCheckbox } from "mdb-react-ui-kit";

const More=()=>{
    const [isChecked, setIsChecked]=useState(false);
    return (
        <>
        <h4 className="top-heading shadow-lg">More</h4>

        <div className="change-password my-3 mx-auto p-3">
                <h4>Change password</h4>
                <input className="password-input mx-auto" placeholder="enter current password" type="text" name="password" id="" />
                <div className="text-center">
                <button className="password-button">change</button>
            </div>
                        
        </div>
        <div className="delete-user p-3 mx-auto">
      
            <h4>Deleted User</h4>
            <p>One you delete account you won't be able to recover all you activities, As per policies we will delete all your data</p>

            <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='option1' 
            label='Are you sure you want to delete this account ?' 
            checked={isChecked}
            onChange={()=>setIsChecked(!isChecked)}
            inline />
            <div className="text-center my-3">
                <button className={isChecked?"password-button":"deleteuser-button"} >Delete</button>
            </div>


                                  
        </div>
        
        </>
    )
}

export default More;