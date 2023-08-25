import React, { useState } from 'react'

export default function DeleteUserForm({ users, deleteUser }) {
    const [idUser, setIdUser] = useState(null)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (idUser !== null)
                deleteUser(idUser)
        }}>
            <div className="form-group">

                {/* {users.map((user, index) => (
                    <button key={index} value={user.id} className='btn'>siba</button>
                ))} */}


                <div onClick={(e) => { setIdUser(e.target.value)}}>
                    {users.map((user) => { return  <button value={user.id}>Supprimer</button>})}
                </div>   
            </div>
        </form>
    )
}
