import {RES_IMG_URL} from "../utils/constant";

const VedioCard = ({ resdata }) => {

    return (
      <div className='vedio-card'>
        <img className='vedio-card-image' src= {RES_IMG_URL} alt="food-image"></img>
        <h3 >{resdata.resName}</h3>
        <h4>Rating : {resdata.rating}</h4>
        <h4>Time :- {resdata.time}</h4>
        <h4>cuisine:-{resdata.cuisine}</h4>
        <h4>priceForTwo :-{resdata.priceForTwo}</h4>
      </div>
    )
  }

  export default VedioCard;