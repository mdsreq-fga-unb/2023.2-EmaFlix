import '../css/Newlogin.css'

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
                    <h2>Preencha os campos abaixos, </h2>
                    <form onSubmit={handleSubmit}>
                        <div className='container-input'>
                            <h8 htmlFor="email">Digite seu novo Usuário</h8>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                placeholder='Usuário'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='container-input'>
                            <label htmlFor="password">Digite sua nova Senha</label>
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
                            <p className='login-criar'><Link to={'/login'}>Já possui uma conta? Entre aqui</Link></p>
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
