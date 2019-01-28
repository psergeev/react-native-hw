import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { AppTextInputStyles as styles } from './AppTextInput.styles';

const AppTextInput = ({ style, onChangeText, value }: TextInputProps) => {
    return (
        <TextInput
            onChangeText={onChangeText}
            value={value}
            style={[styles.textInput, style]}
        />
    );
};

export { AppTextInput };