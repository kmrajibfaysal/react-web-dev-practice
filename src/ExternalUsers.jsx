import { useEffect, useState } from 'react';

function ExternalUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));

        return () => {
            '';
        };
    }, []);

    return (
        <div className="ExternalUsers">
            <h1> Hi there its workings! </h1>
            <p>{users.length}</p>
            {users.map(({ name, email }) => (
                <User name={name} email={email} />
            ))}
        </div>
    );
}

function User({ name, email }) {
    return (
        <div
            style={{ border: '1px solid red', padding: '5px', margin: '10px', borderRadius: '5px' }}
        >
            <h3>Name: {name}</h3>
            <h5>Email: {email}</h5>
        </div>
    );
}

export default ExternalUsers;
