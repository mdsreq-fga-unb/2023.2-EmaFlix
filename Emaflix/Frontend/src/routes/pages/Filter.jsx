import Cards from "../../components/pages/Card.jsx"

import "../css/Filter.css"

const Filter = () => {
    return (
        <div className="filter">
            <input className="pesquisa" type="search" name="" id="" placeholder="Pesquisas por gêneros, nomes, classificação, " />
            <h2>Títulos encontrados</h2>
            <div className="list-cards">
                <Cards />
            </div>
        </div>
    );
};



export default Filter