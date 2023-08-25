import React, { useState } from 'react';
import './List.css';

 function AddUserForm({ addUser }) {
    const [name, setName] = useState([])
    const [age, setAge] = useState([])
    const [gender, setGender] = useState([])
    const [image, setImage] = useState([])

    return (
            <div className="add">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (name.length,age.length, gender.length > 0) {
                        addUser(name, age, gender, image)
                    } else {
                        alert('oups c\'est vide')
                    }
                }}>
                    <input type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder="age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                    <input type="text" placeholder="gender" value={gender} onChange={(e) => { setGender(e.target.value) }} />
                    <input type="text" placeholder="image" value={image} onChange={(e) => { setImage(e.target.value) }} />
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Ajouter" />
                    </div>
                </form>
            </div>
    );
}

export default AddUserForm;
