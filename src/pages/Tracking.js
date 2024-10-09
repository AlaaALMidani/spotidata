import React, { useState } from 'react'

export const Tracking = () => {
    const [number,setNumber]= useState()
    const [name,setName]= useState()
    const [food,setFood]= useState()
    const [array,setArray]= useState([])
    function handleNumber(e){
        setNumber(e.target.value)
    }
    function handleName(e){
        setName(e.target.value)
    }
    function handleFood(e){
        setFood(e.target.value)
    }
    function handleClick(){
        let extra = [...array,{number:number,name:name,food:food,status:"New order"}]
        setArray(extra)
    }
    function handledone(som){
        let extra = [...array]
        extra[array.indexOf(som)].status = "Delivered"
        setArray(extra)
    }
      return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label>
                Enter order number:
                <input value={number} onChange={handleNumber}/>
            </label><br/>
            <label>
                Enter customer name:
                <input value={name} onChange={handleName}/>
            </label><br/>
            <label>
                Enter food order:
                <input value={food} onChange={handleFood}/>
            </label>
            <button onClick={handleClick}>Add!</button>
        </form>
        <h2>Order list</h2>
        {array.map((e)=><dl><dt>{e.name}</dt><dd>Dish: {e.food}</dd><dd>Number: {e.number}</dd><dd>status: {e.status}</dd><button onClick={()=>handledone(e)}>Done!</button>{setTimeout(() => {
            let extra = [...array]
            extra[array.indexOf(e)].status= "preparing"
            setArray(extra)
        }, 10000)}</dl>)}
    </div>
  )
}
