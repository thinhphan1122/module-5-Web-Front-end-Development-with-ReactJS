import { useState } from "react";

// function Counter() {
//   let [count, setCount] = useState(0);
//   let [count2, setCount2] = useState(0);

//   const handleClick1 = () => {
//     const newValue = count + 1;
//     setCount(newValue);
//   };

//    const handleClick2 = () => {
//      const newValue2 = count2 + 1;
//      setCount2(newValue2);
//    };

//   return (
//     <div>
//       <div>
//         Giá trị 1 {count}
//         <div>
//           <button onClick={handleClick1}>Tăng</button>
//         </div>
//       </div>

//       <div>
//         Giá trị 2 {count2}
//         <div>
//           <button onClick={handleClick2}>Tăng</button>
//         </div>
//       </div>
//     </div>
//   );
// }

function useIncrement() {
    const [count, setCount] = useState(0);
    
    function increase(addAmount) {
        setCount(count + addAmount);
    }

    return [count, increase]
}

function Counter() {
    const [count1, increase1] = useIncrement();
    const [count2, increase2] = useIncrement();

    return (
      <div>
        <p>Counter 1: {count1}</p>
        <button onClick={() => increase1(1)}>Increase Counter 1</button>
        <br></br>
        <p>Counter 2: {count2}</p>
        <button onClick={() => increase2(1)}>Increase Counter 2</button>
      </div>
    );
}

export default Counter;
