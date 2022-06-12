import { useState } from 'react'



const Counter = ({ max, step }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => {
            //unlike in setstate , return must return value
            if (count >= max) return count
            return count + step
        })
    };
    const decrement = () => { setCount(count - 1) };
    const reset = () => { setCount(0) };

    return (
        <div className="Counter">
            <h1>Counter</h1>
            <p>{count}</p>
            <button className="btn-lg" onClick={increment}>+</button>
            <button className="btn-lg" onClick={decrement}>-</button>
            <button className="btn-lg" onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter
