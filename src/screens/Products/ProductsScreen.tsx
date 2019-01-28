import React, { Component } from 'react';
import { View } from 'react-native';
import { ProductsScreenStyles as styles } from './ProductsScreen.styles';
import { AppHeader } from '../../components/text/AppHeader';
import { ProductListItem } from '../../components/product-list/ProductListItem';

export default class ProductsScreen extends Component {
    private products: string[] = [
        'map-o', 'smile-o', 'star-o', 'mobile', 'gift', 'plus', 'shopping-cart', 'bandcamp'
    ];

    render() {
        return (
            <View>
                <AppHeader title="Products"
                           style={styles.header}/>

                {this.products.map((icon, i, arr) => {
                    return <ProductListItem name={`Product ${i}`}
                                            icon={icon} key={i}
                                            isLastItem={arr.length - 1 === i}/>
                })}
            </View>
        );
    }
}