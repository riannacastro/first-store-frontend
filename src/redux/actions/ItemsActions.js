export const setItems = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then(data => dispatch({type: "SET_ITEMS", payload: data}))
    }
}