import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const AppTextInputStyles = StyleSheet.create({
    textInput: {
        width: 300,
        fontSize: 16,
        borderWidth: 1,
        borderColor: theme.primaryColors.graphite,
        fontFamily: theme.fonts.primary1,
    }
});
