import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
const Body = () => {
    const [ resList, setResList] = useState([])
    const [ filteredList, setfilteredList] = useState([])
    const [ searchText, setSearchText ] = useState("")

    useEffect( () => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await apiData.json()
        setResList(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredList(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }



    return resList?.length !== 0 ? (
      <div className="body">
        <div className='search'>
            <input type='text' className='search-box' value={searchText}
            onChange={ (e) => {
                setSearchText(e.target.value)
            }}
            ></input>
            <button onClick={() => {
              setfilteredList(resList.filter((res) => res.info.name.toLowerCase().includes(searchText)));
            }}> Search </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setResList(resList.filter((res) => res.info.avgRating > 4));
            }}
          >
            Top Shit
          </button>
        </div>
        <div className="res-container">
          {filteredList
            ? filteredList.map((restaurant) => (
               <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantCard  resData={restaurant} /> </Link>
              ))
            : null}
        </div>
      </div>
    ) : (
      <Shimmer />
    );
  }

export default Body