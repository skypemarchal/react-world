export const ADD_EXPENSE = "ADD_EXPENSE"
export const GET_EXPENSES = "GET_EXPENSES"
export const DELETE_EXPENSE = "DELETE_EXPENSE"

export const addExpense = ({pseudo, email, password}) => ({
    type: ADD_EXPENSE,
    payload: {
        pseudo,
        email,
        password
    }
})

export const deleteExpense = id => ({
    type: DELETE_EXPENSE,
    payload: {id}
})

export const getExpenses = () => ({
    type: GET_EXPENSES,
    payload: {}
})