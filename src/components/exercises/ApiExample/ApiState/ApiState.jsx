const InfoPokemon = (props) => {
var ImgPoke = props.images.front;
  if (props.shiny && props.front) {
    ImgPoke = props.images.frontShiny;
  } else if (props.shiny) {
    ImgPoke = props.images.backShiny;
  } else if (!props.front) {
    ImgPoke = props.images.back;
  }

  return (
    <div>
      <img className="ImgPoke" src={ImgPoke} alt="" />
      <br />
      <button onClick={props.onFlip} className="Btn">
        {props.front ? "Back" : "Front"}
      </button>
      <button onClick={props.onChangeType} className="Btn">
        {props.shiny ? "Apagado" : "Brillante"}
      </button>
    </div>
  );
};

export default InfoPokemon;
