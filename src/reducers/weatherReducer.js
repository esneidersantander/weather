import { types } from "../types/types";

const initialState = {
    day1:{

    },
    day2:{

    },
    day3:{

    },
    day4:{

    },
    day5:{

    },
    city:""
}

export const weatherReducer = ( state=initialState, action)=>{
    switch (action.type) {
        case types.setDay1:
            return {
                ...state,
                day1: action.payload
            }
        case types.setDay2:
            return {
                ...state,
                day2: action.payload
            }
        case types.setDay3:
            return {
                ...state,
                day3: action.payload
            }
        case types.setDay4:
            return {
                ...state,
                day4: action.payload
            }
        case types.setDay5:
            return {
                ...state,
                day5: action.payload
            }
        case types.setCity:
            return {
                ...state,
                city: action.payload
            }
    
        default:
            return state;
    }
}