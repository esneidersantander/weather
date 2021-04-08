import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import '../ListCard/listCard.css'
export const ListCard = () => {
    const {city} = useSelector(state => state.weather);
    const {day1} = useSelector(state => state.weather);
    const {day2} = useSelector(state => state.weather);
    const {day3} = useSelector(state => state.weather);
    const {day4} = useSelector(state => state.weather);
    const {day5} = useSelector(state => state.weather);

    return (
        
            <div className="listCard">
                {
                    city !== ""&&
                    (
                        <>
                            <Card weather ={day1} />
                            <Card weather ={day2} />
                            <Card weather ={day3} />
                            <Card weather ={day4} />
                            <Card weather ={day5} />        
                        </>
                    )
                }
            </div>
    )
}
