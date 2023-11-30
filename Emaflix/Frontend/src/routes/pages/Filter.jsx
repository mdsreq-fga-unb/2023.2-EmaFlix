import React, { useState } from 'react';
import Cards from "../../components/pages/Card.jsx";
import "../css/Filter.css";

const Filter = () => {
    const item = "vida"
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm);

  return (
    <div className="filter">
      <div className="pesquisa">
        <input
          type="search"
          name=""
          id=""
          placeholder="Pesquisar por gêneros, nomes, classificação..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="pesquisa-button">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      <h2>Títulos encontrados</h2>
      <div className="list-cards">
        <Cards filtros={item}/>
      </div>
    </div>
  );
};

export default Filter;
