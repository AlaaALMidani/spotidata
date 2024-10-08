import Card from "./card.js"
import Topcard from"./Topcard.js"

function Artists() {
  return (
    <>
        <div className = 'bg-slate-950'>
            <div  >
                <h1 className='text-5xl text-emerald-500 p-8 m-8 '>Artist</h1>
            </div>
            <div>
                <div className='flex justify-center'>
                    <Card value="Total Plays" />
                    <Card value="ToTal Tracks" />
                    <Card value="Total Listening Time" />
                </div>
                <div className ='flex justify-center' >
                    <Card value ="Persentage Of Artist Plays" />
                    <Card value ="position of top 100"/>
                    <Card value ="Most season listening" />
                </div>
                <div className =' flex justify-center' >
                  <Topcard value ="Top 20 Songs"/>
                </div>
            </div>
        </div>

    </>
  )
}

export default Artists