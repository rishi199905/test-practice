import React from 'react'
import MenuItem from './MenuItem'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const [ menuList, setMenuList ] = useState([])
    const { resId } = useParams()
    useEffect( () => {
        fetchData()
    })


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const resData = await data.json()
        setMenuList(resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    }
  return (
    <div className='res-menu'> 
    
        { menuList.map( menuItem => <MenuItem key={menuItem.card.info.id} menu={menuItem.card.info}/>)}
    </div>
  )
}

export default RestaurantMenu