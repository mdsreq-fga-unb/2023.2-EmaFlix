import "../css/Card.css"

import CardImagem from '../../img/Card - 1000 x 670.png'

function Cards() {
  return (
    <>
    <div className="card">
        <img className="card-img" src={CardImagem} alt="" srcset="" />
        <h2>Spider-Man Aranhaverso</h2>
    </div>
    
    </>
  );
}

export default Cards;