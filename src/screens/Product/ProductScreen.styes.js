import { StyleSheet } from 'react-native';
import { theme } from "../../theme";

export const ProductScreenStyles = StyleSheet.create({
    view: {
        paddingLeft: 50,
        marginTop: 100,
        marginBottom: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderWidth: 1,
        backgroundColor: theme.primaryColors.limeGreen
    },
    header: {
        marginTop: 10,
        marginLeft: 40,
        marginBottom: 40
    },
    icon: {
        position: 'absolute',
        left: 15,
        top: 27
    },
    text: {
        fontSize: 15
    },
    button: {
        marginTop: 20
    }
});