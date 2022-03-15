import React from 'react';
import './App.css';

function App() {
    const names = ['faysal', 'rajib', 'farin', 'farzan', 'ratul', 'ola', 'baba'];

    return (
        <div className="App">
            {names.map((name) => (
                <li>{name}</li>
            ))}
            {names.map((name) => (
                <Person name={name} />
            ))}
            {/* <Person name="John" age="20" />
            <FavColor color="Red" />
            <Person name="Faysal" age="23" /> */}
            <Test />
        </div>
    );
}

function Person({ name }) {
    // console.log(props);
    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    );
}

/* function FavColor({ color }) {
    return (
        <div>
            <h1>Color: {color}</h1>
        </div>
    );
} */

// function Employee() {
//     return (
//         <div>
//             <h1>Ratul Farzan</h1>
//             <p>Former Assistant</p>
//         </div>
//     );
// }

function Test() {
    return (
        <div>
            <h1>Testing brother nothing fancy!</h1>
        </div>
    );
}

export default App;
