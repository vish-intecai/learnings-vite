import React, { useState } from "react";
import MemoryModule from "./modules/MemoryModule";
import Counter from "./modules/Counter";
export default function App() {

  const [module, setModule] = useState("memory");
  
  return (
    <div> 
      <div className="flex flex-row gap-4">
        <button className="border-2 border-gray-300 rounded-md p-2" onClick={()=>setModule("memory")}>Memory</button>
        <button className="border-2 border-gray-300 rounded-md p-2" onClick={()=>setModule("counter")}>Counter</button>
      </div>

      {
        module === "memory" && <MemoryModule />
        }
        {
        module === "counter" && <Counter />
        }
     
    </div>
  );
}
