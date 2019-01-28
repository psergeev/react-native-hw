import React from 'react';
import { ImageStyle, Text, TextStyle, ViewStyle } from 'react-native';
import { AppTextStyles as styles } from './AppText.styles';

export interface IBrandedText {
    style: ViewStyle | TextStyle | ImageStyle,
    children: Element
}

const AppText = ({ style, children }: IBrandedText) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
};

export { AppText };