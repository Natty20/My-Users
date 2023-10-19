import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './List.css';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Grid from '@mui/material/Unstable_Grid2';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import users from './List';

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [users] = useState([])
    return (
        <>
            <div className="container mt-3">
                {/* <button className="homepage"> <Link to="/">Page d'accueil</Link></button> */}
                {/* <button className="homepage"> <Link to="/List">Test</Link></button> */}
            </div>
            <h1 className='welcome'>login to continue</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (email === 'gigi@yahoo.com', password === '0000') {
                    sessionStorage.setItem('connected', 1)
                    return navigate('/');
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
