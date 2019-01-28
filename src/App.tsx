import React, { Component } from 'react';
import LoginScreen from './screens/Login/LoginScreen';
import ProductScreen from './screens/Product/ProductScreen';
import ProductsScreen from './screens/Products/ProductsScreen';

interface Props {
}

interface State {
    showProductScreen: boolean
}

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showProductScreen: false,
        };
    }

    render() {
        let screen: Element;
        if (!this.state.showProductScreen) {
            screen = <LoginScreen onFormSubmit={() => this.showProductScreen()}/>;
        } else {
            screen = <ProductScreen/>;
        }

        // return (screen);
        return (<ProductsScreen />);
    }

    private showProductScreen() {
        this.setState({showProductScreen: true})
    }
}
