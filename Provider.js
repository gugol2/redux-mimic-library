// This is how the store is made accessible by using Context

export class Provider extends React.Component {
    render () {
        return (
            <Context.Provider value={this.props.store}>
                {this.props.children}
            </Context.Provider>
        )
    }
}