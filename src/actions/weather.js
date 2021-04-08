import { loadWeather } from "../helpers/loadWeather";
import { types } from "../types/types";

export const startFindInfo=(value)=>{
    return async (dispatch)=>{
        const weather =await loadWeather(value);
        const {consolidated_weather} = weather;

        dispatch(setDay1(consolidated_weather[0]));
        dispatch(setDay2(consolidated_weather[1]));
        dispatch(setDay3(consolidated_weather[2]));
        dispatch(setDay4(consolidated_weather[3]));
        dispatch(setDay5(consolidated_weather[4]));
    }
}

export const setDay1=(weather)=>({
    type:types.setDay1,
    payload:{...weather}
});
export const setDay2=(weather)=>({
    type:types.setDay2,
    payload:{...weather}
});
export const setDay3=(weather)=>({
    type:types.setDay3,
    payload:{...weather}
});
export const setDay4=(weather)=>({
    type:types.setDay4,
    payload:{...weather}
});
export const setDay5=(weather)=>({
    type:types.setDay5,
    payload:{...weather}
});
export const setCity=(title)=>({
    type:types.setCity,
    payload:title
});