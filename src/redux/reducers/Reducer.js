
function reducer(state = {items: []}, action) {
    switch(action.type) {

        case "SET_ITEMS":

        return {
            ...state,
            items: action.payload
        };

        default:
            break;
        

    }
}
export default reducer