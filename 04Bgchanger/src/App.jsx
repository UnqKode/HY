import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div
        class="Back"
        className="w-full h-screen"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-black w-4/5 rounded-md border-2 border-stone-300 p-2 flex flex-wrap justify-evenly">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4"
            style={{ backgroundColor: "red"}}
          >Red</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 bg-blue-500"
            style={{ backgroundColor: "blue" }}
          >Red</button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 bg-white"
            style={{ backgroundColor: "white" }}
          >Red</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 bg-green-500"
          >Red</button>
        </div>
      </div>
    </>
  );
}

export default App;
