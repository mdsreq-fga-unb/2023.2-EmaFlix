import React, { useState } from 'react';
import Cards from "../../components/pages/Card.jsx";
import "../css/Filter.css";

const Filter = () => {
  const [ValueFilter, setValueFilter] = useState('');
  console.log("o valor do filtro é" + ValueFilter);
  const handleInputChange = (event) => {
    setValueFilter(event.target.value);
  };

  return (
    <div className="filter">
      <div className="pesquisa">
        <input
          type="search"
          name=""
          id=""
          placeholder="Pesquisar por gêneros, nomes, classificação..."
          value={ValueFilter}
          onChange={handleInputChange}
        />
      </div>
      <h2 className="Title-find">Títulos encontrados</h2>
      <div className="list-cards">
        <Cards filtros={[ValueFilter]}/>
      </div>
    </div>
  );
};

export default Filter;
