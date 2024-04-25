import { Link } from "react-router-dom";



const VedioCard = ({ resdata }) => {

return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 ml-3 hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300">
      <div className="m-5 bg-color-gray ">
        <img className='w-44 h-40 object-cover object-center rounded-md' src={resdata.resImage} alt="food-image"></img>
        <h3 className="text-gray-800 text-lg font-semibold mt-2">{resdata.resName}</h3>
        <h4 className="text-gray-600">Rating : {resdata.rating}</h4>
        <h4 className="text-gray-600">Time :- {resdata.time}</h4>
        <h4 className="text-gray-600">cuisine:-{resdata.cuisine}</h4>
        <h4 className="text-gray-600">priceForTwo :-{resdata.priceForTwo}</h4>
        <Link to="/menu/:restaurantName">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">go to menu</button>
        </Link>
      </div>
    </div>

  )
}

export default VedioCard;
