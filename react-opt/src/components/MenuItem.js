import React from 'react'

const MenuItem = ( props ) => {
    const { menu } = props
  return (
    <div className='menu-item'> 
        <h3>Name : {menu.name}</h3>
        <h3>Price : {menu.price / 100}</h3>
        <h3>description : {menu.description}</h3>
    </div>
  )
}

export default MenuItem