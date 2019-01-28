import React from 'react';
import {
    ImageStyle,
    NativeSyntheticEvent,
    NativeTouchEvent,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle
} from 'react-native';
import { AppButtonStyles as styles } from './AppButton.styles';

export interface IMainButton {
    title: string,
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
    style?: ViewStyle | TextStyle | ImageStyle
}

const AppButton = ({ style, title, onPress }: IMainButton) => {
    return (
        <TouchableOpacity style={[styles.touchableOpacity, style]}
                          onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export { AppButton };