import React, { useState } from 'react';
import './List.css';

function AddUserForm({ addBook }) {
    const [title, setName] = useState([])
    const [description, setAge] = useState([])
    const [category, setGender] = useState([])
    const [image, setImage] = useState([])
    

    return (
        <div className="add">
            <form onSubmit={(e) => {
                e.preventDefault()
                if (title.length, description.length, category.length > 0) {
                    addBook(title, description, category)
                } else {
                    alert('oups c\'est vide')
                }
            }}>
                <label>Title :</label>
                <input type="text"  value={title} onChange={(e) => { setName(e.target.value) }} />
                <label>Description :</label>
                <input type="text" value={description} onChange={(e) => { setAge(e.target.value) }} />
                <label>Ctegory :</label>
                <input type="text" value={category} onChange={(e) => { setGender(e.target.value) }} />
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
