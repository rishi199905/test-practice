import React from 'react'
import MenuItem from './MenuItem'
import { useParams } from 'react-router-dom'
import useGetMenu from '../utils/useGetMenu'

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resData = useGetMenu(resId)

  return (
    <div className='res-menu'> 
        { resData?.map( menuItem => <MenuItem key={menuItem.card.info.id} menu={menuItem.card.info}/>)}
    </div>
  )
}

export default RestaurantMenu