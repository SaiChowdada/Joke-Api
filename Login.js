import { useState } from "react";
import './Login.css'

const Login=(props)=>{
    const {usernameCheck}=props
    const [usrname,setUsrname]=useState('')
    const usrnameHandler=(event)=>{
        setUsrname(event.target.value)
    }
    const [passwd,setPasswd]=useState('')
    const passwdHandler=(event)=>{
        setPasswd(event.target.value)
    }
    const handleKeyPress=()=>{
        if (usrname==='user2023' && passwd==='welcome'){
            
            usernameCheck();
        }
    }
    

    return (
      <div className="bg-container">
        <h1>Sign In</h1>
        <label htmlFor="usrname">User Name</label>
        <input onKeyPress={handleKeyPress} value={usrname} onChange={usrnameHandler} type="text" id="usrname" />
        <label htmlFor="passwd">Password</label>
        <input onKeyPress={handleKeyPress} value={passwd} onChange={passwdHandler} type="password" id="passwd" />
        <button onClick={handleKeyPress} type="submit">submit</button>
        
      </div>
    );
}
export default Login;
