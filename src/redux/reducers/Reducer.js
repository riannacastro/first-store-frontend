const initialState = {
    items: []
}

function reducer(initialState, action) {
    switch(action.type) {

        case "GET_ITEMS":

        return {
            ...initialState,
            items: action.payload
        };

    }
}
export default reducer