/* eslint-disable no-lone-blocks */
function App() {
    const names = ['faysal', 'rajib', 'farin', 'farzan', 'ratul'];
    {
        names.map((name) => <Person name={name} />);
    }
    return (
        <div>
            {names.map((name) => (
                <Person name={name} />
            ))}
            {/* <Person name="John" age="20" />
            <FavColor color="Red" />
            <Person name="Faysal" age="23" /> */}
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

export default App;
