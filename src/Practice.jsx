import React, { useState } from 'react';
import './Practice.css';

function Practice() {
    return (
        <div className="Practice">
            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 1);
    return (
        <div className="Counter">
            <h1>Count:{count}</h1>
            <button onClick={increaseCount} type="button">
                Add +1
            </button>
        </div>
    );
}

export default Practice;
