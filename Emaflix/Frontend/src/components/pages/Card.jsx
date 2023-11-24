import "../css/Card.css"


const Card = ({ path, title, description }) => {
    return (
        <>
            <div className="card">
                <img className="card-img" src={path} alt="card-image" />
                <h2>{title}</h2>
            </div>

        </>
    );
};

export default Card;