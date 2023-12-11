import "../css/Home.css"

import CardPrincipal from "../../components/pages/CardPrincipal.jsx";

import Cards from "../../components/pages/Card.jsx";


const Home = () => {
    return (
        <div className="home">
            <CardPrincipal></CardPrincipal>
            <div className="home-cards">
                <h2 className="titulos-generos-home">Títulos disponíveis</h2>
                <div className="list-cards">
                <Cards/>
                </div>
                
            </div>
        </div>

    )
};



export default Home
