import { Link } from "react-router-dom";

import Logo from "../../img/ifb_logo_notext.png"

import "../css/Navbar.css"


const Navbar = ({UserLogado}) => {


    let UsuarioSelecionado = null;

    UserLogado = "sudo"

    if (UserLogado === 'view') {
        UsuarioSelecionado = (
        <ul>
            <li><Link to={`/filter`} className="btn"><span className="material-symbols-outlined">search</span><p>Busca</p></Link></li>
            <li><Link to={`/video_save`} className="btn"><span className="material-symbols-outlined">notifications_active</span><p>Videos Salvos</p></Link></li>
            <li><Link to={`/profile`} className="btn"><span className="material-symbols-outlined">person</span><p>Perfil</p></Link></li>
        </ul>
        );
      } else if (UserLogado === 'conf') {
        UsuarioSelecionado = (
            <ul>
            <li><Link to={`/filter`} className="btn"><span className="material-symbols-outlined">search</span><p>Busca</p></Link></li>
            <li><Link to={`/video_conf`} className="btn"><span className="material-symbols-outlined">movie</span><p>Painel de Vídeos</p></Link></li>
            <li><Link to={`/profile`} className="btn"><span className="material-symbols-outlined">person</span><p>Perfil</p></Link></li>
        </ul>
        );
      } else if (UserLogado === 'sudo') {
        UsuarioSelecionado = (
            <ul>
            <li><Link to={`/filter`} className="btn"><span className="material-symbols-outlined">search</span><p>Busca</p></Link></li>
            <li><Link to={`/usuario_conf`} className="btn"><span className="material-symbols-outlined">settings</span><p>Painel de Usuários</p></Link></li>
            <li><Link to={`/profile`} className="btn"><span className="material-symbols-outlined">person</span><p>Perfil</p></Link></li>
        </ul>
        );
      }

    return (
        <div className="navbar">
            <div className="container-logo">
                <Link to={`/`}><label className="Home-logo"><h2>EMAFLIX</h2><img src={Logo}/></label></Link>
            </div>
            {UsuarioSelecionado}
        </div>
    );
};

export default Navbar