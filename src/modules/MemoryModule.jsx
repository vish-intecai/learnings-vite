import React, { useState } from 'react'

export default function MemoryModule() {
 const [person_a, setPerson_a_Memory] = useState("Frontend");
  const [person_b, setPerson_b_Memory] = useState("Backend");
  return (
    <div>
       <div className="flex flex-col items-center justify-center h-dvh">
        <h1 className="text-3xl font-bold">Memory</h1>
        <div className="space-y-2 flex flex-row items-center gap-6">
          <div>
            <h1>Person A</h1>
            <p className="">{person_a}</p>
          </div>

          <div>
            <h1>Person B</h1>
            <p>{person_b}</p>
          </div>

         
        </div>
        <div>
            <button className="border-2 border-gray-300 rounded-md p-2" onClick={()=>{
              setPerson_a_Memory("Backend");
            }}>
              Change Person A's memory to Backend
            </button>
            <button className="border-2 border-gray-300 rounded-md p-2" onClick={()=>{
              setPerson_b_Memory("Frontend");
            }}>
              Change Person B's memory to Frontend
            </button>
            <button className="border-2 border-gray-300 rounded-md p-2" onClick={()=>{
              setPerson_a_Memory("Frontend");
              setPerson_b_Memory("Backend");
            }}>
             Revert
            </button>
          </div>
      </div>
    </div>
  )
}
