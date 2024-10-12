import TopArtistsCard from "../components/TopArtistsCard.js";
import { useNavigate } from "react-router-dom";
function Top(props) {
  const navigate = useNavigate()
  const handleClick = (i) => {
    navigate('/Artist', { state: { name: i } })
  }
  return (
    <div className="bg-slate-950 flex flex-col items-start pl-7 w-full">
      <div className="mt-10 font-bold">
        <pre className="inline-block text-5xl  text-green-500 ">Top 100 </pre>
        <span className=" inline-block text-5xl  text-blue-700 "> {props.title}</span>
      </div>
      <div className="flex flex-col w-4/5">
     
        <div className="flex justify-end w-full">
          <select className=" py-2.5 text-lg text-gray-500 bg-transparent border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 ">
            <option>Last year</option>
            <option>Since beginning</option>
          </select>
        </div>

        <ol className="flex flex-col  rounded-lg">
          {props.array.slice(0, 100).map((_, index) => (
            <li key={index} className="flex items-center " onClick={() => props.title === "Artists" ? handleClick(_[0]) : ""}>
              <span className="text-2xl font-bold text-emerald-500 mr-4">{index + 1}.</span>
              <TopArtistsCard title={_[0]} index={index} />
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