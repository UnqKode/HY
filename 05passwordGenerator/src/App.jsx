import { useState, useCallback, useEffect ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setlen] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setPass] = useState();

  const passwordRef =useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*(){}[];',./<>?:*/-+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setPass(pass);
  }, [length, num, char, setPass]);

  const copyToClipBoard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  })
  
  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);


  return (
    <>
      <div className="text-4xl text-center text-amber-500 bg-gray-700 rounded-md">
        <h1 className="p-4 text-2xl">Password Generator</h1>
        <div className="flex justify-center overflow-hidden mb-4 h-auto rounded-lg pb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-3/4 py-1 px-3  text-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-lg"
          onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-evenly">
          <div className="flex text-sm gap-x-2 p-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setlen(e.target.value);
                }}
              />
              <label>Length :{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={num}
                id="numberInput"
                onChange={() => {
                  setnum((prev) => !prev);
                }}
              />
              <label>Number Allowed</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={char}
                id="charInput"
                onChange={() => {
                  setchar((prev) => !prev);
                }}
              />
              <label>Char Allowed</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
