import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useEffect, useState} from "react";
export const Home = () => {


     


  const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
        fetch("https://playground.4geeks.com/contact/agendas/jorgeSanchez/contacts",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
     })
     .then((resp)=>resp.json())
     .then(data=>{dispatch({type:"get_contact",payload:data.contacts})})
     },[])


	return (
		<div>
            <div>
                {store.contacts.map((contact,index=>(
                    <h1 key={index}>{contact.name}</h1>
                    
                ))

                )}
            </div>
        </div>
	);
}; 