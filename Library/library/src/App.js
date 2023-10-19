import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Login from './Library/Login'
import Library from './Library/Library'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


function App() {

  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.setItem('connected', '0');
    return navigate('/Login')
  }

  const checkConnexion = () => {
    if (sessionStorage.getItem('connected') === '1') {
      return true
    }
    return navigate('/Login')
  }


  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#a55233' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Accueil</Link>
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 10 }}>
            <Link to="/Library" style={{ textDecoration: 'none', color: 'inherit' }}>Library</Link>
          </Typography>
          <Button color="inherit" onClick={logout}>Se déconnecter</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path={'/'} element={checkConnexion() &&<Library />} />
        <Route path={'/Login'} element={<Login />} />
        <Route path={'/Library'} element={checkConnexion() && <Library />} />
      </Routes>
    </div>
  );
}

export default App;
