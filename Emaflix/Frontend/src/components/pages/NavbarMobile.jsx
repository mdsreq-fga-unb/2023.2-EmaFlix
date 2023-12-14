import "../css/NavBarMobile.css"

import { Link } from "react-router-dom";

import Logo from "../../img/logo1.png"

import "../class_css/button_neon.css"

import "../css/Navbar.css"


const Navbar = ({UserLogado}) => {


    let UsuarioSelecionado = null;

    UserLogado = "view"

    if (UserLogado === 'view') {
        UsuarioSelecionado = (
        <ul className="r-button">
            
            <li><Link to={`/filter`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">search</span></span><i></i></button></Link></li>
            <li><Link to={`/video_save`}><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">notifications_active</span></span><i></i></button></Link></li>
            <li><Link to={`/login`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">logout</span></span><i></i></button></Link></li>
        </ul>
        );
      } else if (UserLogado === 'conf') {
        UsuarioSelecionado = (
            <ul className="r-button">
            <li><Link to={`/filter`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">search</span>Pesquisa</span><i></i></button></Link></li>
            <li><Link to={`/video_conf`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">movie</span>Painel de vídeos</span><i></i></button></Link></li>
            <li><Link to={`/login`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">logout</span></span><i></i></button></Link></li>
        </ul>
        );
      } else if (UserLogado === 'sudo') {
        UsuarioSelecionado = (
            <ul className="r-button">
            <li><Link to={`/filter`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">search</span>Pesquisa</span><i></i></button></Link></li>
            <li><Link to={`/usuario_conf`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">settings</span>Painel de Usuários</span><i></i></button></Link></li>
            <li><Link to={`/login`} ><button className="button-neon" style={{ '--clr': '#8A2BE2' }}><span><span className="material-symbols-outlined icon">logout</span></span><i></i></button></Link></li>
        </ul>
        );
      }

    return (
        <div className="navbar">
            <div className="container-logo">
                <Link to={`/`}><label className="Home-logo"><h2>RECANTO DO CINEMA</h2><img src={Logo}/></label></Link>
            </div>
            {UsuarioSelecionado}
        </div>
    );
};

export default Navbar