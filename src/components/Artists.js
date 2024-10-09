import Topartistscard from "./Topartistscard.js";

function Artists() {
  return (
    <>
      <div className="bg-slate-950 flex flex-col items-center">
        <div className="w-full">
          <h1 className="text-5xl text-emerald-500 p-8">Artists</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-1/4">
          <select className="block  py-2.5 px-0 w-1/4 text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 m-8 ">
            <option>last year </option>
            <option>since beginning</option>
          </select>
          <ol className="flex flex-col items-center justify-center w-4/5">
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">1.</span>
              <Topartistscard value="11111111111111111111111111111111111111111" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">2.</span>
              <Topartistscard value="11111111111111111111111111111111111111111111" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">3.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">4.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">5.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">6.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">7.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">8.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">9.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">10.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">11.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">12.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">13.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">14.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">15.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">16.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">17.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">18.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">19.</span>
              <Topartistscard value="1" />
            </li>
            <li className="flex items-center justify-center w-full">
              <span className="text-2xl text-emerald-500 mr-4">20.</span>
              <Topartistscard value="1" />
            </li>
          </ol>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded mt-8">
                Show More
              </button>
        </div>
      </div>
    </>
  );
}

export default Artists;