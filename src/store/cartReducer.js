const cartReducer = (state = [], action) => {
    switch(action.type){
        case "ADD": return [
            ...state,
            ...action.item
        ]
        case 'REMOVE' :
            return state.filter((e) => action.item.id !== e.id)
        case 'REMOVE_ONE':
            let idx = -1
            state.forEach( (s,i) => {
                if(s.id === action.item.id)
                idx=i
            })
            state.splice(idx,1)
            return [...state]
        default: return state;
    }
}

export default cartReducer