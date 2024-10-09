import React, {  useState } from 'react'
import '../App.css'
export const System = () => {
  const [array,setArray]= useState([])
  const [value,setValue] = useState()
  function handleValue(e){
    setValue(e.target.value)
  }
  function handleClick(){
    let extra = [...array,value]
    setArray(extra)
    setValue("")
  }
  function handleDelete(som){
    let extra = [...array]
    setArray(extra.filter((e)=>e!=som))
  }
  function handleEdit(e){
    let change = prompt("What do you want it changed to?")
    let extra = [...array]
    extra[array.indexOf(e)] = change
    setArray(extra)
  }
  return (
    <div>
        <form onSubmit={(e)=> e.preventDefault()}>
            <input type='text' value={value} onChange={handleValue}/>
        </form>
        <button onClick={handleClick}>click me!</button>
        <ul>
        {array.map((e)=>
          <li>{e} <button onClick={()=>handleDelete(e)}>Delete</button> <button onClick={()=>handleEdit(e)}>Edit</button></li> 
        )}
        </ul>
    </div>
  )
}
