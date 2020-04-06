// This is how the High Order Funtion Connect does behing the scenes
// It passes the store to the Connected Component with Context

export const connect = (mapStateToProps) => {
    return (Component) => {
        class Receiver extends React.Component {
            componentDidMount () {
                const { subscribe } = this.props.store;

                this.unsubscribe = subscribe(() => this.forceUpdate());
            }

            componentWillUnmount () {
                this.unsubscribe();
            }

            render() {
                const { getState, dispatch } = this.props.store;
                const state = getState();
                const stateNeeded = mapStateToProps(state);

                return (
                    <Component {...stateNeeded} dispatch={dispatch} />
                )
            }
        }

        class ConnectedComponent extends React.Component {
            render () {
                return (
                    <Context.Consumer>
                        {(store) => (
                            <Receiver store={store} />
                        )}
                    </Context.Consumer>
                )
            }
        }

        return ConnectedComponent;
    }
}