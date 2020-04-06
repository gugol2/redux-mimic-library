// This is what the Thunk Middleware does behind the scenes
// It allowes us to dispatch a function instead of an action object because
// the middleware will call that function with dispatch method itself as the 
// first argument and the reducer will only get a plain JS object.

const thunk = (store) => (next) => (action) => {
    if(typeof action === 'function') {
        return action(store.dispatch);
    } else {
        return next(action);
    }
};