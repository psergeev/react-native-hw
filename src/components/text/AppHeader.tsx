import React from 'react';
import { ImageStyle, Text, TextStyle, ViewStyle } from 'react-native';
import { AppHeaderStyles as styles } from './AppHeader.styles';

export interface IHeader {
    title: string,
    style?: ViewStyle | TextStyle | ImageStyle
}

const AppHeader = ({ style, title }: IHeader) => {
    return (
        <Text style={[styles.text, style]}>
            {title}
        </Text>
    );
};

export { AppHeader };