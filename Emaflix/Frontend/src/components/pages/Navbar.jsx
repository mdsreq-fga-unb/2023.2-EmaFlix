import { Link } from "react-router-dom";

import Logo from "../../img/logo1.png"

import "../class_css/button_neon.css"

import "../css/Navbar.css"


const handleLogout = () => {
    localStorage.clear();
};



const Navbar = ({ }) => {

    let UsuarioSelecionado = null;

    const UserLogado = localStorage.getItem('actions');

    console.log("o user logado é" + UserLogado);

    if (UserLogado === 'user') {
        UsuarioSelecionado = (
            <ul>

                <li><Link to={`/filter`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">search</span>Pesquisa</span><i></i></button></Link></li>
                <li><Link to={`/video_save`}><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">notifications_active</span>Videos Salvos</span><i></i></button></Link></li>
                <li><button onClick={handleLogout} className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">logout</span>Logout</span><i></i></button></li>
            </ul>
        );
    } else if (UserLogado === 'conf') {
        UsuarioSelecionado = (
            <ul>
                <li><Link to={`/filter`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">search</span>Pesquisa</span><i></i></button></Link></li>
                <li><Link to={`/video_conf`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">movie</span>Painel de vídeos</span><i></i></button></Link></li>
                <li><Link to={`/profile`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">person</span>Perfil</span><i></i></button></Link></li>
            </ul>
        );
    } else if (UserLogado === 'sudo') {
        UsuarioSelecionado = (
            <ul>
                <li><Link to={`/filter`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">search</span>Pesquisa</span><i></i></button></Link></li>
                <li><Link to={`/usuario_conf`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">settings</span>Painel de Usuários</span><i></i></button></Link></li>
                <li><Link to={`/profile`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">person</span>Perfil</span><i></i></button></Link></li>
            </ul>
        );
    }

    return (
        <div className="navbar">
            <div className="container-logo">
                <Link to={`/`}><label className="Home-logo"><h2>RECANTO DO CINEMA</h2><img src={Logo} /></label></Link>
            </div>
            {UsuarioSelecionado}
        </div>
    );
};

export default Navbar