import './List.css'
import React, { useState, useEffect } from 'react'
import AddUserForm from './AddUserForm'


import { v4 as uuidv4 } from 'uuid'

export default function Users() {

    const [users, setUsers] = useState([])
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setUsers([
            {
                id: '1',
                name: 'AKIRA Aime',
                age: '25 years',
                gender: 'male',
                image: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0',
            },
            {
                id: '2',
                name: 'MUGISHA Josiane',
                age: '30 years',
                gender: 'Female',
                image: 'https://www.freeiconspng.com/thumbs/female-icon/female-icon-9.png',
            },
            {
                id: '3',
                name: 'RUNGU Celine',
                age: '27 years',
                gender: 'Female',
                image: 'https://www.freeiconspng.com/thumbs/female-icon/female-icon-9.png',
            },
            {
                id: '4',
                name: 'RUGWIRO Armel',
                age: '9 years',
                gender: 'male',
                image: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0',
            },
            {
                id: '5',
                name: 'GIHOZO Nathalie',
                age: '23 years',
                gender: 'Female',
                image: 'https://www.freeiconspng.com/thumbs/female-icon/female-icon-9.png',
            },
            {
                id: '6',
                name: 'NCUTI Christian',
                age: '25 years',
                gender: 'male',
                image: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0',
            },
            {
                id: '7',
                name: 'KUZA Christelle',
                age: '23 years',
                gender: 'Female',
                image: 'https://www.freeiconspng.com/thumbs/female-icon/female-icon-9.png',
            },
            {
                id: '8',
                name: 'BENIMANA Eliane',
                age: '35 years',
                gender: 'Female',
                image: 'https://www.freeiconspng.com/thumbs/female-icon/female-icon-9.png',
            },
            {
                id: '9',
                name: 'SHYAKA Credo',
                age: '25 years',
                gender: 'male',
                image: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0',
            }
        ])
    }, [])

    function addUser(name, age, gender) {
        setUsers([...users, { id: uuidv4(), name: name, age: age, gender: gender }])
    }

    //  delete fcn
    function deleteUser(id) {
        let newUser = users.filter(user => user.id !== id)
        setUsers(newUser)
    }


    // modier fcn 
    function editUser(id) {
        let EditUser = users.find(user => user.id === id);
        let newName = prompt('Enter new name:', EditUser.name)
        let newAge = prompt('Enter new age:', EditUser.age)
        let newGender = prompt('Enter new gender:', EditUser.gender)
        let newImage = prompt('Enter new image:', EditUser.image)
        if (newName, newAge, newGender, newImage) {
            let editedUser = users.map(user =>
                user.id === id ? { ...users, name: newName, age : newAge, gender : newGender  } : user
            );
            setUsers(editedUser);
        }
    };

    return (
        <main className='users-list'>
            <h1>liste des nos utilisateurs</h1>
            <section className="container">
                {users.map((user, index) => (
                    <div key={index} className='identity'>
                        <img className='image' src={user.image}></img>
                        <p className='title'>{user.name}</p>
                        <p className='gender'>{user.age}</p>
                        <p className='gender'>{user.gender}</p>
                        <div className='modification'>
                            <button onClick={() => editUser(user.id)}>Modifier</button>
                            <button className='delete' onClick={() => deleteUser(user.id)}>Supprimer</button>
                        </div>
                    </div>
                ))}
            </section>

            <h1> Ajouter un utilisateur via ce formulaire</h1>
            <AddUserForm addUser={addUser} />

        </main>
    )
}
