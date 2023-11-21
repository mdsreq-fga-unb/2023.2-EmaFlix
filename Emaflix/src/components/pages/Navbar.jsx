import { Link } from "react-router-dom";

import Logo from "../../img/ifb_logo_notext.png"

import "../css/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container-logo">
                <Link to={`/`}><label className="Home-logo"><h2>EMAFLIX</h2><img src={Logo}/></label></Link>
            </div>
            <ul>
                <li><Link to={`/filter`} className="btn"><p>Busca</p><span className="material-symbols-outlined">search</span></Link></li>
                <li><Link to={`/notification`} className="btn"><p>Avisos</p><span className="material-symbols-outlined">notifications_active</span></Link></li>
                <li><Link to={`/profile`} className="btn"><p>Perfil</p><span className="material-symbols-outlined">person</span></Link></li>
            </ul>
        </div>
    );
};

export default Navbar