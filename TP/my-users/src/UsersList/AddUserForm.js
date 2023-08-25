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
                if (name.length, age.length, gender.length > 0) {
                    addUser(name, age, gender)
                } else {
                    alert('oups c\'est vide')
                }
            }}>
                <label>Name :</label>
                <input type="text"  value={name} onChange={(e) => { setName(e.target.value) }} />
                <label>Age :</label>
                <input type="text" value={age} onChange={(e) => { setAge(e.target.value) }} />
                <label>Gender :</label>
                <input type="text" value={gender} onChange={(e) => { setGender(e.target.value) }} />
                <label>Image :</label>
                <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Ajouter" />
                </div>
            </form>
        </div>
    );
}

export default AddUserForm;
