import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const AppButtonStyles = StyleSheet.create({
    touchableOpacity: {
        borderRadius: 5,
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: theme.primaryColors.EPAMBlue
    },

    text: {
        fontFamily: theme.fonts.primary1,
        color: theme.primaryColors.white,
        fontSize: 25
    }
});