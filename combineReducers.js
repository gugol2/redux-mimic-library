// This is what Redux.CombineReducers does behind the scenes... 

function combineReducers (state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action),
    }
}


const store = Redux.combineReducers(rootReducer);