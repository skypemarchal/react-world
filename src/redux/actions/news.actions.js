export const GET_RELOAD_NEWS = "GET_RELOAD_NEWS"

export const getReloadNews = () => {
    return (dispatch) => {
        dispatch({ type: GET_RELOAD_NEWS, payload: true });
    }
}