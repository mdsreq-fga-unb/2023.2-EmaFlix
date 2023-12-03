import '../css/Login.css'

import IfbLogo from "../../img/LOGO_ifb.svg"

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Mandar credencias para Pedro lindo
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='login-all'>
            <div className='container-login-tela'>
                <div className='login'>
                    <h1>EMAFLIX</h1>
                    <h2>Seja bem-vindo, </h2>
                    <form onSubmit={handleSubmit}>
                        <div className='container-input'>
                            <label htmlFor="email">Usuário</label>
                            <input
                                className='input-button'
                                type="email"
                                id="email"
                                value={email}
                                placeholder='Digite seu usuário'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='container-input'>
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                placeholder='Digite sua senha'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className='Login-entrar' type="submit">Entrar</button>

                        <div>
                            <p className='login-criar'><Link to={'/new_login'}>Novo por aqui? Crie uma conta</Link></p>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className="container-logo-tela">
                <img src={IfbLogo} alt="" srcset="" />
            </div>
        </div>


    );
};

export default Login;
