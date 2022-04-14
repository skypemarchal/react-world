export const INCREMENT1 = "INCREMENT1"
export const INCREMENT2 = "INCREMENT2"
export const INCREMENT3 = "INCREMENT3"
export const DECREMENT1 = "DECREMENT1"
export const DECREMENT2 = "DECREMENT2"
export const DECREMENT3 = "DECREMENT3"

export const increment1 = ({sumStep}) => ({
    type: INCREMENT1,
    payload: {
        sumStep
    }
})
export const increment2 = ({sumStep}) => ({
    type: INCREMENT2,
    payload: {
        sumStep
    }
})
export const increment3 = ({sumStep}) => ({
    type: INCREMENT3,
    payload: {
        sumStep
    }
})