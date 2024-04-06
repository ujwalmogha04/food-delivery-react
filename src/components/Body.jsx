import VedioCard from './VedioCard';
import resList from "../utils/mockData";
import { useState } from 'react';



const Body = () => {
  const [restro, setrestro] = useState(resList);
  const [filteredrestro, setfilteredrestro] = useState(resList);

  const [searchValue, setsearchValue] = useState("");

  return (
    <div className='body'>
      <div className='filter-search-btn'>
        <button className='filter-btn' onClick={() => {
          const filteredList = restro.filter(
            (resData) => resData.rating > 4
          )
          setfilteredrestro(filteredList);
        }}>Rating 4.0+</button>
        <button className='filter-btn' onClick={() => {
          const PriceList = restro.filter(
            (resData) => resData.priceForTwo < 300
          )
          setfilteredrestro(PriceList);
        }}>Less than Rs.300</button>

        <button className='filter-btn' onClick={() => {
          const PureVeg = restro.filter(
            (resData) => resData.pureVeg === "Yes"
          )
          setfilteredrestro(PureVeg);
        }}>PureVeg</button>

        <button className='filter-btn' onClick={() => {
          const NonVeg = restro.filter(
            (resData) => resData.pureVeg === "NO"
          )
          setfilteredrestro(NonVeg);
        }}>NonVeg</button>

        <input className="input-search" type="text" value={searchValue} onChange={(e) => {
          setsearchValue(e.target.value);
        }} />
        <button className='search-btn' onClick={() => {
          const filteredRestraunt = restro.filter(
            (resData) => resData.resName.toLowerCase().includes(searchValue.toLowerCase())
          )
          setfilteredrestro(filteredRestraunt);
        }}>Search</button>

        <button className='filter-btn' onClick={() => {
          setfilteredrestro(resList);
        }}>Reset Filter</button>
      </div>
      <div className='vedio-container'>

        {filteredrestro.map((resdata) => (
          <VedioCard key={resdata.id} resdata={resdata} />
        ))}

      </div>
    </div>
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

