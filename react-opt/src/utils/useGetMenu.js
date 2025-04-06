import { useEffect, useState } from "react"

const useGetMenu = ( resId ) => {

    const [resList, setResList] = useState()

    useEffect( () => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=" + resId + "& =undefined&submitAction=ENTER")
        const json = await data.json()
        setResList(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        
    }
    return resList;
}

export default useGetMenu;