import "../css/Home.css"

import Carrossel from "../../components/pages/Carrossel.jsx";

import Cards from "../../components/pages/Card";


const Home = () => {
    return (
        <div className="home">
            <Carrossel />
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
