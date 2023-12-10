import '../css/Newlogin.css'

import IfbLogo from "../../img/logo1.png"
import Ifblogo from "../../img/LOGOIFB.png"

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [LoginSucesso, setLoginSucesso] = useState('');
    const [errorMessagem, setErrorMessagem] = useState('');
    const errorLogin = false;
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password.length < 8){
            setErrorMessagem("Senha muito curta, a senha deve ter no mínimo 8 caracteres");
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/register', {
                username: username,
                password: password
            });
            setLoginSucesso('Parabens, Usuário criado com sucesso! Redirecionando para a tela de login');
            setErrorMessagem('');
            console.log(response.data.error);
        } catch (error) {
            setErrorMessagem("Usuário já existe");
            errorLogin = true;
        }
    };

    useEffect(() => {
        if (LoginSucesso === 'Parabens, Usuário criado com sucesso! Redirecionando para a tela de login') {
            setTimeout(() => {
                setRedirect(true);
            }, 3000);
        }
    }, [LoginSucesso]);

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='login-all'>
            <div className='container-login-tela'>
                <div className='login'>
                    <h1>RECANTO DO CINEMA</h1>
                    <h2>Preencha os campos abaixos, </h2>
                    <div className='error'>
                        <p>{errorMessagem}</p>
                        <p className='login-sucesso'>{LoginSucesso}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='container-input'>
                            <h8 htmlFor="username">Digite seu novo Usuário</h8>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                placeholder='Usuário'
                                onChange={(e) => setUsername(e.target.value)}
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
                        <button className='Login-entrar' type="submit">Criar Conta</button>

                        <div>
                            <p className='login-criar'><Link to={'/login'}>Já possui uma conta? Entre aqui</Link></p>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className="container-logo-tela">
                <img className="recanto-cinema" src={IfbLogo} alt="" srcset=""/>
                <img className="ifb-logo" src={Ifblogo} alt=""/>
            </div>
        </div>


    );
};

export default Login;
