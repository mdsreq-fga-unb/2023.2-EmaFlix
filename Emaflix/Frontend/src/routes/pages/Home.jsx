import "../css/Home.css"

import CardPrincipal from "../../components/pages/CardPrincipal.jsx";

import Carrossel from "../../components/pages/Carrossel.jsx";

import Cards from "../../components/pages/Card";


const Home = () => {
    return (
        <div className="home">
            {/* <Carrossel/> */}
            <CardPrincipal></CardPrincipal>
            <div className="home-cards">
                <h2 className="titulos-generos-home">Títulos disponíveis</h2>
                <div className="list-cards">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                </div>
                
            </div>
        </div>

    )
};



export default Home
