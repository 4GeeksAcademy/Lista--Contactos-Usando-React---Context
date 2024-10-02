import React, {useState, useEffect} from "react";
import { json } from "react-router";
const Example = () => {
    // un array vacion porque recibe un array en la cual se le va mapear
    const [listaAgendas, setListaAgendas] = useState([])
    // estado para el input, se recibe texto que escribe el usuario por eso va entre ""
    // se pone const porque siempre se debe recibir un string y no otro tipo de dato sino dara error por si se recibe
    const [inputName, setInputName] = useState("")
    const [silvato,setSilvato] = useState(false)

    // el evento onchange simpre nos da el objeto event que tiene tanto informacion del texto, event que es por cada cambio 
    const HandlerInput = (event) => {
        // accediendo al valor que la persona escribe en el input
       setInputName(event.target.value)
    }
    // crear agendasn, peticion post
    const HandlerCreateAgenda = () => {
        // el usario primero crear un name, el estado del name cambiara y ese name se mandara al usar el boton
        fetch(`https://playground.4geeks.com/contact/agendas/${inputName}`, {
            method: 'POST' })
            // si no hay un body: "", ya no hace falta usar el content-type, aplication-json porque con eso aclaramos que en el body mandamos un json
            // el content-type es un HEADERS, por example:(se envia un objeto transformado a json )
            /* body: json.stringify({"hola":1, "hola":2}) */
            // osea cuando se mando un objeto transformado a json en le body, se le avisa a los headers que el content-type es aplication json
            /* headers : {
                'content-type': 'aplication/json',
            } */
        //    como no hay un cuerpo que le estamos mandando a la API, o sea no hay un body, objeto que le mandamos a la API

        // )} llave y parentesis por si habia un body 
            // cuando se resuelva la peticion el primer punto ten recibe la respuesta de la peticion, la recibimos y a formato js
            .then(response=>response.json())
            // MANEJO DE ERROR PERSONALIZADO: el .them menajea en su primer argumento la situaciones postivas y en le segundo maneja el error
           /*  .them(response=>response.json(), (error) => console.log(error)) */

            .then((data)=>{
                // imprime lo que nos da la api
                /* console.log(data) */
                // verificar si se creo bien la agenda
                // si lo que se recibe es igual lo que escribe el usuario(la data coincide con el input)
                if(data.slug == inputName) {
                    alert("Felicidades, creaste una nueva agenda")
                    // luego de eso podemos limpiar el estado local con : OJO QUE TMB PARA Q FUNCIONE INPUT DEVE TENER: value={inputname}, osea si 
                    // si value={inputName} esto hace si esque inputName vuelve a su estado string vacio, entonces el inputName estado se va elimnar, o sea se va limpiar
                    // linpiando el valor del input
                    setInputName('')
                    // si algo cambio se activa el useffect, useffect ve que cambio silvato y ejecute denuevo el handlerclick
                    // modifica el valor de silvato, osea de false a true y lo actualiza:
                    setSilvato(previo=>!previo)
                }else{ 
                    alert('Lo siento, algo salio mal')
                }
            })
            // si algo sale mal en el primer them o el segundo ya que ambos manejan la situacion si todo sale bien
            // si hubo un erro, .cath maneja el error, o sea los them se lavan la mano y se lo tiran a cath
            .catch ( error => console.log(error))


    }
 
    const HandlerClick = () =>{
        // peticion FETCH(api que permite hacer peticiones HTTP)
        fetch("https://playground.4geeks.com/contact/agendas")// como no tiene nada mas es un metodo GET
        // como fetch es un promesa que puese demorar y meintras se resuelva, "CUANDO ESTO  SE RESUELVA THEN(ENTONCES) SE EJECUTA" 
        .then(response=> response.json()) // response es la respuesta cruda, que la traducimos de json a js
        // cuando se resuelve es esperada por un punto then, el resultado de reponse.json() ojo que ahi hay un retunr implicito
        // osea que retorna algo que no se puede ver, asi: return response.json()
        //  que retorna la otra funcion es una data.
        // la data en caso positivo(200), es el objeto que tiene los datos de la API
        // aca el explicito porque se abre la llave de juego 
        .then((data) => {
            // para guardar la informacion de manera inteligente tengo que guardarlo en estado local
            // el array de agendas la guardamos en un estado local y con setlistaAgendas cambia de estado inicial
            setListaAgendas(data.agendas)
        })
        // manejo de errores
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    }
       // useEffect es una funcion que actualiza de manera automatica(automatizacion), tiene los parametros de una funcion flecha y un array,
    /*     ESTRUCTURA:    useEffect( () => {}, [])*/    
        useEffect( () => {
            // osea cuando el componente se cargue, el useEffect la actuliza automaticamente, la funcion handlerclick se ejecuta  de manera automatica gracias a useEffect
            // asi evitamos o refrescar la pagina o pulsar nuevamete el boton
            HandlerClick()
            // useEffect escucha al silvaato, si cambia silvato, se vuele a reejutar
        }, [silvato])

    return(
        <div>
            <h1>Hello</h1>
            {/* evento click, se ejecutara la funcion por cada click que haga la persona */}
            <button onClick={HandlerClick}>Lista de contactos</button>
            {/* como estamos dentro de una area de html decir a react que usaremos logica dentro de html con llaves se indica para renderizar */}
            {
                listaAgendas.map((element, index) => {
                    // el return en react en el area de html es el renderizado 
                    return (
                    // cuando el return va mas de una linea, o sea tiene contenido de dos o mas lineas tiene que ir con ()
                    // siempre el return ve a un unico elemento como padre y depues los hijos que queramos 
                    // el padre siempre tendra un key/ki/ que es un identificador que puede ser id(de preferencia), index...  que no se repita
                        // cada elemento tiene un id
                        <ul key={element.id}>
                            {/* se renderiza el name de cada elemento */}
                            <li>{element.slug}</li>
                        </ul>
                    )
        
                })
            }
            {/* onchange evento que por cada cambio se va ejecutar la funcion por cada cambio  */}
            {/* aqui se rescata el valor que la persona escribe */}
            <br />
            <br />
            <input type="text" value={inputName} onChange={HandlerInput}/>
            {/* aqui se envia o se confirma lo que se va enviar */}
            <button onClick={HandlerCreateAgenda}>Crear Agendas</button>
            
        </div>
    )
}
export default Example;