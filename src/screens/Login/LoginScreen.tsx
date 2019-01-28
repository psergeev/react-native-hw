import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginScreenStyles as styles } from './LoginScreen.styles';
import { theme } from '../../theme';
import { AppHeader } from '../../components/text/AppHeader';
import { AppTextInput } from '../../components/inputs/AppTextInput';
import { AppButton } from '../../components/buttons/AppButton';

interface Props {
    onFormSubmit: Function;
}

export default class LoginScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.view}>
                <Icon name="smile-o"
                      size={100}
                      style={styles.icon}
                      color={theme.primaryColors.EPAMBlue}/>

                <AppHeader title="Friday's Shop"
                           style={styles.header}/>

                <AppTextInput style={styles.textInput}
                              value="email"
                              onChangeText={(text) => console.log(text)}/>

                <AppTextInput style={styles.textInput}
                              value="password"
                              onChangeText={(text) => console.log(text)}/>

                <AppButton style={styles.button}
                           title="Login"
                           onPress={() => this.onButtonPressed()}/>
            </View>
        );
    }

    private onButtonPressed() {
        this.props.onFormSubmit();
    };
}