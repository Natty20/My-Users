import { Link } from 'react-router-dom'
import React from 'react';
import './List.css';

function Home() {
    return (
        <>
            <main>
                <h1>Welcome to our HomePage</h1>
                <section className='Home'>
                    <div className='login'>
                        <h2>Click here to Log in</h2>
                        <button> <Link to="/Login" className="btn btn-primary">Login</Link></button>
                    </div>

                    <div className='users'>
                        <h2>Click here to see our user's list</h2>
                        <button> <Link to="/List" className="btn btn-primary">Users</Link></button>
                        <button> <Link to="/Test" className="btn btn-primary">test</Link></button>
                    </div>
                </section>
            </main>

        </>

    );
}

export default Home;
