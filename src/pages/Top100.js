import TopArtistsCard from "../components/TopArtistsCard.js";
import { useNavigate } from "react-router-dom";
function Top(props) {
  const navigate = useNavigate()
  const handleClick = (i) => {
    navigate('/Artist', { state: { name: i } })
  }
  return (
    <div className="bg-slate-950 flex flex-col items-center w-full">
      <div className="w-full">
        <h1 className="text-5xl text-emerald-500 p-8">{props.title}</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-between w-full  flex-row-reverse ">
          <select className=" py-2.5 px-0 w-1/8 text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 mr-40 my-8 flex flex-col-reverse">
            <option>Last year</option>
            <option>Since beginning</option>
          </select>
        </div>
        <ol className="flex flex-col items-center justify-center w-4/5 border-2 border-gray-300 p-4 rounded-lg">
          {props.array.slice(0, 100).map((_, index) => (
            <li key={index} className="flex items-center justify-center w-full" onClick={() => props.title === "Artists" ? handleClick(_[0]) : ""}>
              <span className="text-2xl text-emerald-500 mr-4">{index + 1}.</span>
              <TopArtistsCard title={_[0]} />
            </li>
          ))}
        </ol>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded mt-8">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Top;