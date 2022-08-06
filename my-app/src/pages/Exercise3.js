import React, { useState } from "react";

const Exercise3 = () => {

 

        const [count, setCount] = useState(0);


        const incrementCount = () => {

            setCount(count + 1);
        };
        return (<div className="text-center mt-5">
            <>
            <p>Button has been clicked: {count} </p>
            <button onClick={()=> setCount (count+1)}>Click Me</button>
            </>
        </div>
        );


   


};
export default Exercise3;