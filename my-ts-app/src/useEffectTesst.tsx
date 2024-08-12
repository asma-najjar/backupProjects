import React, { useState, useEffect } from 'react';

function UseEffectTest() {
    const [count, setCount] = useState(0);

    // Runs after every render
    useEffect(() => {
        console.log('Effect with no dependencies');
    });

    // Runs once after initial render
    useEffect(() => {
        console.log('Effect with empty dependency array');
    }, []);

    // Runs after initial render and whenever `count` changes
    useEffect(() => {
        console.log('Effect with count as a dependency', count);

        return () => {
            console.log('Cleanup for effect with count as a dependency');
        };
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseEffectTest;
