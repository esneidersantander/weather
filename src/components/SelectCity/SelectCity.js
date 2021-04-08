import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { setCity, startFindInfo } from '../../actions/weather';
import { loadCities } from '../../helpers/loadCities';
import '../SelectCity/selectCity.css'

export const SelectCity = () => {

    const [, setValue] = useState('');
    const dispatch = useDispatch()
    const handleInputChange=(newValue)=>{
        setValue(newValue);
    }


    const loadOptions = async (value, callback) => {
        const optionsAux = await loadCities(value);
        callback(optionsAux);
    };

    const handleChange = e => {
        dispatch(setCity(e.label));
        dispatch(startFindInfo(e.value));
    }  

    return (
        <>
            
            <div className="selectCity">
            <h2 className="mainTitle">Enter the name of a city </h2>
                <AsyncSelect
                    onChange={handleChange}
                    loadOptions={loadOptions}
                    onInputChange={handleInputChange}
                />
            </div>
        </>
    )
}
