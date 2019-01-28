import React, { Component } from 'react';
import LoginScreen from './screens/Login/LoginScreen';
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
            screen = <ProductsScreen/>;
        }

        return (screen);
    }

    private showProductScreen() {
        this.setState({showProductScreen: true})
    }
}
