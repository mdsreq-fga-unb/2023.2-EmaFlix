import React, { useState } from 'react';
import Cards from "../../components/pages/Card.jsx";
import "../css/Filter.css";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log("Item de pesquisa");
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
      </div>
      <h2 className="Title-find">Títulos encontrados</h2>
      <div className="list-cards">
        <Cards filtros={searchTerm}/>
      </div>
    </div>
  );
};

export default Filter;
