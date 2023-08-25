import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <h1>Welcome to our Login page</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (email === 'cloudcampus@yahoo.com', password === '0000') {
                    return navigate('/List');
                } else {
                    alert('Identifiants ou mot de passe incorrect')
                }
            }}>
                <input type="text" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Login" />
                </div>
            </form>

        </>

    );
}

export default Login;
