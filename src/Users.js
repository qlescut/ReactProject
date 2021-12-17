import axios from "axios"
import {useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import './Users.css';

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    }, [])


    if(users.length === 0){
        return <span>Loading ...</span>
    }

    return (
        <div className="Users">
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username}
                        <Link to={"/user/" + user.id} className="btn">EN SAVOIR PLUS</Link>                      
                    </li>
                ))}
            </ul>
        </div>
    )
}

