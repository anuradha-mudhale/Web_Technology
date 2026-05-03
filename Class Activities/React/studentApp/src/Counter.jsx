import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);
    const [rcount,setrCount] = useState(10);
    return(
        <>
        <h2>Count:{count}</h2>
        <h2>rcount:{rcount}</h2>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        <button onClick={()=>setrCount(rcount-1)}>Decrease</button>
        </>
    );

}
export default Counter;