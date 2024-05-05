import RestroruntCard from "./RestroCard";
import restroData from "../Utils/mockData";
import { useState, useEffect } from "react";
import SimmerComponent from "./Simmer";
import { Link } from "react-router-dom";

const BodyContent = () => {
  let [restroMockData, setRestroMockData] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [filteredRestro, setFilteredRestro] = useState([]);

  const filterTopResto = () => {
    restroFilteredData = restroMockData.filter(
      slRestro => Number(slRestro.info.avgRating) > 4
    );
    setRestroMockData(restroFilteredData);
  };

  const getData = async () => {
    var foodData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    foodData = await foodData.json();
    setRestroMockData(
      foodData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestro(
      foodData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const searchByVal = e => {
    let inputText = searchValue.toLowerCase();
    let searcheddata = restroMockData.filter(resto =>
      resto.info.name.toLowerCase().includes(inputText)
    );
    setFilteredRestro(searcheddata);
  };
  return filteredRestro?.length === 0 ? (
    <SimmerComponent />
  ) : (
    <div className="mx-8">
      <div className="flex mb-4">
        <div className="search-container">
          <input
            className="h-12 border-2 border-blue-100 rounded-lg"
            placeholder="Search"
            type="text"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          ></input>
          <button
            className="px-[20] py-[10] cursor-pointer bg-blue-100 mx-4 rounded-lg"
            onClick={() => searchByVal()}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => filterTopResto(e)}
          className="px-[20] py-[10] cursor-pointer bg-blue-100 mx-4 rounded-lg"
        >
          Filter Top Rated Restoracnt
        </button>
      </div>
      <div className="flex flex-wrap gap-x-4">
        {filteredRestro &&
          filteredRestro.map(slrestrodata => {
            return (
              <Link
                to={"/restrorent/" + slrestrodata.info?.id}
                key={slrestrodata.info?.id}
              >
                <RestroruntCard {...slrestrodata.info} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BodyContent;
