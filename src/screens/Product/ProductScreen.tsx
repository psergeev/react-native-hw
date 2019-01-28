import React, { Component } from 'react';
import { View } from 'react-native';
import { ProductScreenStyles as styles } from './ProductScreen.styes';
import { theme } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppHeader } from '../../components/text/AppHeader';
import { AppText } from '../../components/text/AppText';
import { AppButton } from '../../components/buttons/AppButton';

export default class ProductScreen extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Icon name="map-o"
                      size={40}
                      style={styles.icon}
                      color={theme.primaryColors.graphite}/>

                <AppHeader title="Product 1"
                           style={styles.header}/>

                <AppText style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </AppText>

                <AppButton style={styles.button}
                           title="All Products"
                           onPress={() => console.log('formSubmitted')}/>
            </View>
        );
    }
}