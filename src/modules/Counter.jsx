import React, { useState } from "react";

export default function Counter() {
  const [ml, setMl] = useState(0);

  return (
    <div className="flex flex-col h-dvh justify-center items-center">
      {ml > 0 ? <p>{ml} ml</p> : <p>No ml</p>}

      {ml}

      <button onClick={() => setMl(ml + 100)}>Add 100 ml</button>
      <button
        onClick={() => {
          if (ml > 0) {
            setMl(ml - 100);
          }
        }}
      >
        Remove 100 ml
      </button>
    </div>
  );
}
