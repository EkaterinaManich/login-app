import React, { useState, useEffect } from 'react';

import './Login.scss';

export default function Login({setIsLogged}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [wrongLogged, setWrongLogged] = useState(false);
    const correctUser = 'admin';
    const correctPass = '123456';

    useEffect(() => {
        if (localStorage.getItem('name') === correctUser && localStorage.getItem('password') === correctPass) {
            setIsLogged(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function validate() {
        if (correctUser === name && correctPass === password) {
            localStorage.setItem('name', correctUser);
            localStorage.setItem('password', correctPass);
            setIsLogged(true);
        }
        setWrongLogged(true);
        setTimeout(() => {
            setWrongLogged(false)
        }, 5000);
        setPassword('');
    }

    return (
        <div className="login">
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input 
                type="password" 
                value={password} 
                placeholder="Your password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={validate} type="submit">Log in</button>
            <div className={wrongLogged ? "wrongLog": "wrongLog hidden"}>Data entered incorrectly. Please, try again.</div>
        </div>
    )
}
