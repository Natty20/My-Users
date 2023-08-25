import './List.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import AddUserForm from './AddUserForm'
// import DeleteUserForm from './DeleteUserForm'

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers([
            {
                id: '1',
                name: 'AKIRA Aime',
                age: '25 years',
                gender : 'male',
                image: '😀',
            },
            {
                id: '2',
                name: 'MUGISHA Josiane',
                age: '30 years',
                gender: 'Female',
                image: '😀',
            },
            {
                id: '3',
                name: 'RUNGU Celine',
                age: '27 years',
                gender: 'Female',
                image: '😀',
            },
            {
                id: '4',
                name: 'RUGWIRO Armel',
                age: '9 years',
                gender: 'male',
                image: '😀',
            },
            {
                id: '5',
                name: 'GIHOZO Nathalie',
                age: '23 years',
                gender: 'Female',
                image: '😀',
            },
            {
                id: '6',
                name: 'NCUTI Christian',
                age: '25 years',
                gender: 'male',
                image: '😀',
            },
            {
                id: '7',
                name: 'KUZA Christelle',
                age: '23 years',
                gender: 'Female',
                image: '😀',
            },
            {
                id: '8',
                name: 'BENIMANA Eliane',
                age: '35 years',
                gender: 'Female',
                image: '😀',
            },
            {
                id: '9',
                name: 'SHYAKA Credo',
                age: '25 years',
                gender: 'male',
                image: '😀',
            }
        ])
    }, [])

    // Add user function

    function addUser(name, age, gender, image) {
        setUsers([...users, { id: uuidv4(), name: name, age: age, gender: gender, image :image }])
    }

    // cs   delete user function
    // function deleteUser(id) {
    //     let newUsers = [...users].filter((tab) => tab.id.toString() !== id.toString())
    //     setUsers(newUsers)
    // }


    // ch    delete user fcn
    function deleteUser(id) {
        let newUsers = users.filter(user => user.id !== id)
        setUsers(newUsers)
    }


    // modier user fcn 
    function modifyUser (id) {
        let userToEdit = users.find(user => user.id === id);
        let newName = prompt('Enter new name:', userToEdit.name);
        let newAge = prompt('Enter new age:', userToEdit.age);
        let newGender = prompt('Enter new gender:', userToEdit.gender);
        let newImage = prompt('Enter new image:', userToEdit.image);
        if (newName, newAge, newGender, newImage) {
            let editedUser = users.map(user =>
                user.id === id ? { ...users, name: newName, age : newAge, gender : newGender, image : newImage } : user
            );
            setUsers(editedUser);
        }
    };

    return (
            <main className='users-list'>
                <h1>liste des nos utilisateurs chez ZOÏ</h1>
                <section className="container">
                    {users.map((user, index) => (
                        <div key={index} className='identity'>
                            <span role="img">{user.image}</span>
                            <p className='name'>{user.name}</p>
                            <p className='age'>{user.age}</p>
                            <p className='gender'>{user.gender}</p>

                            <div className='modification'>
                                <button onClick={() => modifyUser(user.id)}>Modifier</button>
                                <button onClick={() => deleteUser(user.id)}>Supprimer</button>
                                {/* <DeleteUserForm users={users} deleteUser={deleteUser} /> */}
                            </div>
                        </div>
                    ))}
                </section>

                <h1> Ajouter un utilisateur via ce formulaire</h1>
                <AddUserForm addUser={addUser} />
           
            </main>  
    );
}

export default UsersList;
