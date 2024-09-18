import React, { useState } from 'react';

function Title() {
  const [count, setCount] = useState(0);

  return (
<>
<h1 className="mt-8 text-3xl font-bold">Vite + React</h1>
      <div className="card mt-4 p-4 bg-white rounded-lg shadow-md">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
</>
   );
}

export default Title;