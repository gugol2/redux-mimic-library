// This is how the store is made accessible by using Context

const Context = React.createContext();

class ConnectedApp extends React.Component {
    render () {
        return (
            <Context.Consumer>
                {(store) => (
                    <App store={store} />
                )}
            </Context.Consumer>
        )
    }
}

class Provider extends React.Component {
    render () {
        return (
            <Context.Provider value={this.props.store}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

ReactDOM.render(	            
    <Provider store={store} >             
        <ConnectedApp/>
    </Provider>,
    document.getElementById('app')	 
);