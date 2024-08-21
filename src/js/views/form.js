import React, { useState } from "react";
export function Formulario() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [form,setForm]=useState([])


    // funcion que por cada click se nos active un fetch, una peticion a una API
    const handleClick = (evento)=> {
        evento.preventDefault()
        // fetch funcion que hace  solicitudes HTTP a una API o a un servidor web, lo que devuelve esta funcion es una promesa 
        fetch('https://playground.4geeks.com/contact/agendas')
        // no se sabe cuánto tiempo tomará en hacerce esa solcitud, pero puedes manejar el resultado (ya sea exitoso o con error) una vez que se complete.
        // 1) traducir la respuesta de fortmato json a js
        .then((response)=>response.json())
        // then<>entonces recibe el resultado de lo recibido e imprimelo
        //  .then((data)=>console.log(data)) // para imrpimmirlo en la consola
        .then((data)=>{setForm(data.agendas)})
    }

//    const  handleClickName = (evento) => {
//     fetch('https://playground.4geeks.com/contact/agendas')
//     .then((response)=>response.json())
//     .then((data)=>console.log(data))
//     setName(evento.target.value)
//    }


    return (
        <div className="vh-100 py-5" >
            <h1 className="text-center">Add a new contact</h1>
            <form className="mx-auto w-75" onSubmit={handleClick} >
                <div className="mb-3">
                    <label htmlFor="exampleInpuName" className="form-label">Full Name</label>
                    <input /* onChange={handleClickName} value={name} */ placeholder="Full Name" type="text" className="form-control" id="exampleInpuName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input placeholder="Enter Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input placeholder="Enter Phone" type="number" className="form-control" id="exampleInputPhone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInpuAddress" className="form-label">Address</label>
                    <input placeholder="Enter Address" type="text" className="form-control" id="exampleInpuAddress" aria-describedby="emailHelp" />
                </div>
                <button  type="submit" className="w-100 btn btn-primary">Save</button>
                <a href="/" className="">or get back to contacts</a>

            </form>

        </div>



    )
}