import React, { useState } from 'react'

function Home() {
  let[data,setData]= useState([])
  function getdata(e){
    e.preventDefault();
    fetch("http://localhost:4100/",{
      headers:{
        authorization:JSON.parse(localStorage.getItem("auth"))
      }
    })
    .then((resp)=>{
      resp.json()
    .then((data)=>{
      if(data.result==="error"){
        console.log("token is not send")
      }else{setData(data);}
   
       })
    })
  }
  return (
    <>
    <div className='m-5'></div>
<button className='m-5 btn' onClick={getdata}>click me</button>
{
  data.map((items)=>(
    <div className='m-5'><h1>{items.username}</h1></div>
  ))
}
    </>
  )
}

export default Home