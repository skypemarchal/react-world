import { ADD_EXPENSE, DELETE_EXPENSE, GET_EXPENSES } from "../actions/expenses.actions";

export default function expensesReducer(state = [], action)
{
    switch(action.type)
    {
        case ADD_EXPENSE:
            return [...state, action.payload];
        
        /* case DELETE_EXPENSE:
            return state.filter(expense) */
        case GET_EXPENSES:
            return state;
            
        default:
            return state;
    }
}