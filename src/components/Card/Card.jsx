import "./card.css"

function Card(props) {
  return (
    <div className="card">
      <img src={props.source} alt="icon" />
      <h5>{props.text}</h5>
    </div>
  );
}

export default Card;