import React, { useEffect, useState } from 'react'

export const Fintess = () => {
    const [activity,setActivity] = useState("")
    const [steps,setSteps] = useState("")
    const [time,setTime] = useState("")
    const [array,setArray] = useState([])
    const [total,setTotal]= useState(false)
    function activityChange(e){
        setActivity(e.target.value)
    }
    function timeChange(e){
        setTime(e.target.value)
    }
    function stepsChange(e){
        setSteps(e.target.value)
    }
    function handleClick(){
        let extra = [...array,{activity:activity,steps:steps,time:time}]
        setArray(extra)
        setActivity("")
        setTime("")
        setSteps("")
        if(array.length== 1&& array[0].steps>=10000){
            setTotal(true)
        }
        else if(array.length>=2&& array.reduce((a,b)=>{return a+Number(b.time)},0)>= 10000){
            setTotal(true)
        }
    }
    useEffect(()=>{
        if(total){alert("goal achieved!")}
    },[total])
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label>
                Enter activity name:
                <input value={activity} onChange={activityChange}/>
            </label><br/>
            <label>
                Enter amout of steps:
                <input value={steps} onChange={stepsChange}/>
            </label><br/>
            <label>
                Enter time spent in minutes:
                <input value={time} onChange={timeChange}/>
            </label><br/>
            <button onClick={handleClick}>Add!</button>
        </form>
        {array.map((e)=><dl><dt>{e.activity}</dt><dd>Steps during activity: {e.steps}</dd><dd>Time spent during activity: {e.time}</dd></dl>)}
        <br/><br/>
        <div>
            <h1>Summery:</h1>
            <h4>Time spent:{array.length>=2 ?array.reduce((a,b)=>{return a+Number(b.time)},0): "N/A"}</h4>
            <h4>Steps down:{array.length>=2 ?array.reduce((a,b)=>{return a+Number(b.steps)},0): "N/A"}</h4>
            <h4>Goal achieved(10k steps):{}</h4>
        </div>

    </div>
  )
}
