import List from './UsersList/List'
import { Routes, Route } from 'react-router-dom'
import Home from './UsersList/Home'
import Login from './UsersList/Login'

function App() {
  return (

    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/Login'} element={<Login />} />
      <Route path={'/List'} element={<List />} />
    </Routes>
    // <div>
    //   <List />
    // </div>
  );
}

export default App;
