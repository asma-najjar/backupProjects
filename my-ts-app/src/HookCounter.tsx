import React, { useState, useCallback } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const reset = useCallback(() => setCount(initialCount), [initialCount]);
    const increment = useCallback(() => setCount(count + 1), [count]);
    const decrement = useCallback(() => setCount(count - 1), [count]);


    return (
    <div>
      count: {count}
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default HookCounter
