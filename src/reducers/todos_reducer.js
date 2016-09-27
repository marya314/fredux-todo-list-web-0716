export function todosReducer (state=[], action) {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            return state.slice(0, action.payload).concat(state.slice(action.payload + 1, -1))
            //give me everything inside the state array then add in action payload
        default:
            return state;
    }
}

//export default - class

// let action = {type: 'ADD_TODO', payload: {title: 'Buy Milk'}}
// this.props.store.dispatch()

//get everything working then install redux library
//add a button to every todo so you can remove it
