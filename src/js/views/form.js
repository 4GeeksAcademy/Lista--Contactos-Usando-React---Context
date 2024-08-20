import React, { useState } from "react";
export function Formulario() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")

   const  handleClickName = (evento) => {
    fetch('https://playground.4geeks.com/contact/agendas')
    .then((reponse)=>response.json())
    .the




    setName(evento.target.value)
    console.log(name)
   }


    return (
        <div className="vh-100 py-5" >
            <h1 className="text-center">Add a new contact</h1>
            <form className="mx-auto w-75" >
                <div className="mb-3">
                    <label for="exampleInpuName" className="form-label">Full Name</label>
                    <input onChange={handleClickName} value={name} placeholder="Full Name" type="text" className="form-control" id="exampleInpuName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input placeholder="Enter Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPhone" className="form-label">Phone</label>
                    <input placeholder="Enter Phone" type="password" className="form-control" id="exampleInputPhone" />
                </div>
                <div className="mb-3">
                    <label for="exampleInpuName" className="form-label">Address</label>
                    <input placeholder="Enter Address" type="text" className="form-control" id="exampleInpuName" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="w-100 btn btn-primary">Save</button>
                <a href="/" className="">or get back to contacts</a>

            </form>

        </div>



    )
}