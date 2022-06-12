import { useEffect, useState } from 'react'

const getCountFromLocaleStorage = () => {
    const countStorage = localStorage.getItem('count')
    return countStorage ? JSON.parse(countStorage).count : { count: 0 }
}
const setCountToLocaleStorage = (count) => {
    localStorage.setItem("count", JSON.stringify({ count }))
}

const useLocaleStorage = (initialState, key) => {
    const get = () => {
        const storage = localStorage.getItem(key)
        return storage ? JSON.parse(storage).value : initialState
    }

    const [value, setValue] = useState(get())
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }))
    }, [value])

    return [value, setValue]
}

const Counter = ({ max, step }) => {

    const [count, setCount] = useLocaleStorage(0, 'count')

    useEffect(function () {
        document.title = ` ${count}`
    }, [count]);

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
