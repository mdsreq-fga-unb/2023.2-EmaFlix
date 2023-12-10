import '../css/Login.css'

import IfbLogo from "../../img/logo1.png"
import Ifblogo from "../../img/LOGOIFB.png"
import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [tokenValido, setTokenValido] = useState('');
    const [errorMessagem, setErrorMessagem] = useState('');


    const Login = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username: username,
                password: password
            });

            const token = response.data.token;
            localStorage.setItem('token', token);
            if (token != null) {
                setTokenValido(true);
            }

        } catch (error) {
            setErrorMessagem("Usuário ou senha incorreta");
            console.log(errorMessagem);
        }
    };

    if (tokenValido) {
        return <Navigate to="/" />;
    }


    return (
        <div className='login-all'>
            <div className='container-login-tela'>

                <div className='login'>
                    
                    <h1>RECANTO DO CINEMA</h1>
                    <h2>Seja bem-vindo, </h2>
                    <div className='error'>
                        <p>{errorMessagem}</p>
                    </div>
                    <form onSubmit={Login} autoComplete='off'>
                        <div className='container-input'>
                            <label htmlFor="username">Usuário</label>
                            <input
                                className='input-button'
                                type="text"
                                id="username"
                                value={username}
                                placeholder='Digite seu usuário'
                                onChange={(e) => setUsername(e.target.value)}
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
                <img className="recanto-cinema" src={IfbLogo} alt="" srcset="" />
                <img className="ifb-logo" src={Ifblogo} alt="" />
            </div>
        </div>


    );
};

export default Login;
