import { combineReducers } from "redux";
import { DECREMENT1, DECREMENT2, DECREMENT3, INCREMENT1, INCREMENT2, INCREMENT3 } from "../actions/counters.actions";

export function Reducer1(state = 0, action)
{
    switch(action.type){
        case INCREMENT1:
            return state++
        case DECREMENT1: 
            return state--
        default:
            return state
    }
}
export function Reducer2(state = 0, action)
{
    switch(action.type){
        case INCREMENT2:
            return state++
        case DECREMENT2: 
            return state--
        default:
            return state
    }
}
export function Reducer3(state = 0, action)
{
    switch(action.type){
        case INCREMENT3:
            return state++
        case DECREMENT3: 
            return state--
        default:
            return state
    }
}

export default combineReducers({
    Reducer1,
    Reducer2,
    Reducer3
})