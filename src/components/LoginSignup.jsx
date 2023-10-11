//import React from 'react';
import './LoginSignup.css';

import React, { useState } from 'react';



import user_icon from '../Images/LoginSignup/person.png';
import email_icon from '../Images/LoginSignup/email.png';
import password_icon from '../Images/LoginSignup/password.png';

const LogingSignup =() => {

    // dynamic variable
    const[action,setAction ] =useState("Login");




    return(
        <div className ='container'>
            <div className ="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                        {action === "Login" ? (
                <div></div>
            ) : (
                <>
                    <div className='input'>
                        <img src={user_icon} alt=""/>
                        <input type ="text" placeholder='Surname'/>
                    </div>
                
                    <div className='input'>
                        <img src={user_icon} alt=""/>
                        <input type ="text" placeholder='Name'/>
                    </div>
                </>
            )}
  
                    <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type ="email" placeholder='Email'/>
                    </div>

                    <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input type ="password" placeholder='Password'/>
                    </div>
            </div>
   
   {action==="Sign Up"?<div></div>:
   <div className="forgot-password">Lost Password? <span>Click Here !</span></div>    
   }
              <div className="submit-container">
                <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action=="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>


            </div>
        </div>
    )
}

export default LogingSignup



// colors
/*

E1CFCA
D2D2D2
FECECC
EDBCCF
F2F2F2
EE7EA0

*/
