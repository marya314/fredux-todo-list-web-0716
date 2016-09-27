import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/todolist';

import {todosReducer} from './reducers/todos_reducer'
import {createStore} from './store'

const store = createStore(todosReducer)




function render() {
    ReactDOM.render(<ToDoList store={store} />, document.getElementById('container'));
}

store.subscribe(()=>{console.log('Cats are the best')});
store.subscribe(render);

render();
