import axios from 'axios';
import React, { useState, useEffect } from 'react';

const LoUsers = () => {
    const [listOfUser, setListOfUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        .then(res => setListOfUser(res.data))
        .catch(err => setError(err))
    },[])

    console.log(listOfUser[0].name)

    return(
        <div>
            <ul style={{listStyle:'none'}}>
                {listOfUser.map(e => {return ( <li>{e.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default LoUsers;