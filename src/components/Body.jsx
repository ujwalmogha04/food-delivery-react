import VedioCard from './RestaurantCard';
import resList from "../utils/mockData";
import { useState } from 'react';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [restro, setrestro] = useState(resList);
  const [filteredrestro, setfilteredrestro] = useState(resList);
  const [searchValue, setsearchValue] = useState("");
  const [noRestaurantFound, setNoRestaurantFound] = useState(false);

  const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), timeout);
    };
  };


  const handleSearchChange = (value) => {
    setsearchValue(value);
    debouncedSearch(value);
  };

  const debouncedSearch = debounce((value) => {
    const filteredRestraunt = restro.filter(
      (resData) => resData.resName.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredrestro(filteredRestraunt);

    if (filteredRestraunt.length === 0) {
      setNoRestaurantFound(true);

    } else {
      setNoRestaurantFound(false);
    }
  }, 500);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1 className='text-red-500 text-3xl text-center mt-9 pb-44'>OOPS! please check your internet connection </h1>
  }


  else 
  return (
    <div >
      <div className='flex mt-5'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-72 mr-4' onClick={() => {
          const filteredList = restro.filter(
            (resData) => resData.rating > 4
          );
          setfilteredrestro(filteredList);
        }}>Rating 4.0+</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-4' onClick={() => {
          const PriceList = restro.filter(
            (resData) => resData.priceForTwo < 300
          );
          setfilteredrestro(PriceList);
        }}>Less than Rs.300</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-4' onClick={() => {
          const PureVeg = restro.filter(
            (resData) => resData.pureVeg === "Yes"
          );
          setfilteredrestro(PureVeg);
        }}>PureVeg</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-4' onClick={() => {
          const NonVeg = restro.filter(
            (resData) => resData.pureVeg === "NO"
          );
          setfilteredrestro(NonVeg);
        }}>NonVeg</button>

        <input
          className="border border-gray-300 bg-white h-10 px-8 pr-10 rounded-l-xl text-sm focus:outline-none"
          type="text"
          placeholder='Search...'
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-xl mr-4' onClick={() => debouncedSearch(searchValue)}>Search</button>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' onClick={() => {
          setfilteredrestro(resList);
        }}>Reset Filter</button>
      </div>

      {
        noRestaurantFound ? (
          <p className="text-red-500 text-center mt-5 text-xl pb-44">No restaurants found matching your search criteria.</p>

        ) : (
          <div className='flex flex-wrap ml-48 mt-9 mb-2'>
            {filteredrestro.map((resdata) => (
              <VedioCard key={resdata.id} resdata={resdata} />
            ))}
          </div>
        )
      }

    </div >
  );
};

export default Body;






// useEffect(() => {
//   fetchData();
// }, [])

// const fetchData = async () => {
//   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
//   const json = await data.json();

//   console.log(json);
//   // setrestro(json.data.cards[4].data)
// }

