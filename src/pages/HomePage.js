import React from 'react'
import { ListCard } from '../components/ListCard/ListCard'
import { SelectCity } from '../components/SelectCity/SelectCity'

export const HomePage = () => {
    return (
        <div>
            <SelectCity/>
            <ListCard/>
        </div>
    )
}
