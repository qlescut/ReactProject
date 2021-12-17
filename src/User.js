import axios from "axios"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import './User.css';

export default function Users() {

    const [users, setUsers] = useState([])
    const {userId} = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, )
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    }, [userId])

    if(users.length === 0){
        return <span>Loading ...</span>
    }


    return (
        <div className="User">
            <ul>
                <li key={users.id}>
                    <h2>{users.username}</h2>
                    <p><b>Name : </b>{users.name}</p>
                    <p><b>Email : </b>{users.email}</p>
                    <p><b>Address : </b> <br />
                        {users.address.street}<br />
                        {users.address.suite}<br />
                        {users.address.city}<br />
                        {users.address.zipcode}<br />
                        {users.address.geo.lat}<br />
                        {users.address.geo.lng}</p>
                    <p><b>Number phone : </b>{users.phone}</p>
                    <p><b>Website : </b>{users.website}</p>
                    <p><b>Company : </b> <br />
                        {users.company.name}<br />
                        {users.company.catchPhrase}<br />
                        {users.company.bs}<br /></p>
                </li>                    
            </ul>
        </div>
    )
}