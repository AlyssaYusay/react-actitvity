import React, { useEffect, useState } from "react";



const Exercise3 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => (count < 1 ? count + 1 : 0));
        }, 1000);
      });

    return 
    <>
    <button onClick={() => { alert('Clicked!'); }}>Click Me</button></>
  };
  
  export default Exercise3;