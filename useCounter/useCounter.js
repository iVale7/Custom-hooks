import { useState } from "react"

export const useCounter = (initalValue = 0) => {

    const [counter, setCounter] = useState(initalValue)

    const increment = (value = 1) => {
        setCounter((current)=> current + value)
    }
    const decrement = (value = 1) => {
        if (counter === 0) return
        setCounter((current) => current - value)
    }
    const reset = () => {
        setCounter(0)
    }
    return {
        counter, increment, decrement, reset,
    }

}