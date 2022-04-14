import { GET_USER_PSEUDO } from "../actions/user.actions";

const initialState = {}

export default function userReducer(state = initialState, action) 
{   
    switch(action)
    {
        case "GET_USER_PSEUDO":
            console.log("ACTION : " +action.payload);
            return action.payload;
        default:
            return state;
    }
        
}