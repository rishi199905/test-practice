import React from 'react'

const RestaurantCard = ( props ) => {
    const { resData } = props 
    return (
      <div className='res-card'>
        <img className='res-logo' alt='logo' src='https://assets.zenn.com/strapi_assets/food_logo_5fbb88038c.png'></img>
  
        <h4>
          {resData.info.name}
        </h4>
        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRating} stars</h5>
        <h5>{resData.info.sla.deliveryTime} Mins</h5>
      </div>
    )
  }

export default RestaurantCard