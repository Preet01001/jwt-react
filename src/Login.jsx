import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const[username,setUsername]= useState("");
    const[password,setPassword]= useState("");
    const navigate = useNavigate("")
   async function sbmt(e){
        e.preventDefault();
        let data = {username,password};
    let result = await fetch("http://localhost:4100/login",{
            method:"post",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });

        let resp = await result.json();
        if(resp.sttus==="user nhi hai"){
          alert("no user found")
        }else{
          localStorage.setItem("user",JSON.stringify(resp.data));
          localStorage.setItem("auth",JSON.stringify(resp.auth));
          navigate("/")
          
        }
    }

  return (
    <>
          <form className='m-5 p-5' onSubmit={sbmt}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">UserName</label>
    <input  type="text" onChange={(e)=>{setUsername(e.target.value)}}  className="form-control" id="exampleInputEmail1"  placeholder="Enter UserName"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}    className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </>
  )
}

export default Login