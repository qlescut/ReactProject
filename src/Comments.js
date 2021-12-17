import { useState } from "react"

export default function Form() {
    const [users, setUsers] = useState([
        {Pseudo: ""},
        {Message: ""}
    ])

    const [Pseudo, setPseudo] = useState("")
    const [Message, setMessage] = useState("") 

    function handlePseudo(event) {
        setPseudo(event.target.value)
    }
    function handleMessage(event) {
        setMessage(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault();
        const commentsPseudo = {Pseudo: Pseudo}
        const commentsMessage = {Message: Message}
        setUsers([...users, commentsPseudo, commentsMessage]);

    }

    return (
        <div className="comments">
            <div className="form">
                <h1>Ajouter un commentaire   </h1>
                <form onSubmit={handleSubmit}>
                    <label for= "pseudo">Pseudo</label>
                    <input type="text" name= "pseudo" value={Pseudo} onChange={handlePseudo} required />
                    <label for= "message">Message</label>
                    <input type="text" name= "message" value={Message} onChange={handleMessage} required/>
                    <button type="submit">OK</button>
                </form>
            </div>

            <div className="CommentList">
                <h1>Liste de commentaires</h1>
                <ul>
                    {users.map(user => <li>{user.Pseudo}{user.Message}</li>)}
                </ul>
            </div>
        </div>
    )
}