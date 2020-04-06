// This function is the core concept of Middleware, it tries to do sth before the action hits the reducer.
// As we are right now we can't jump in between dispacthing an action
// and that action being received by the reducer, so, we have to do it before dispatching.

const checkAndDispatch = (store, action) => {
    if(action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
        return alert('You are smart, but poor!')
    }

    if(action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
        return alert('You are smart, but poor!')
    }

    return store.dispatch(action);
}

// How it is used
function addTodo () {
    const input = document.getElementById('todo');
    const value = input.value;
    input.value = '';

    // Instead of this
    store.dispatch(addTodoAction({name: value,
        complete: false,
        id: generateId()
    }));

    // We do this
    checkAndDispatch(store, addTodoAction({
        name: value,
        complete: false,
        id: generateId()
    }));
};