import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const ProductListItemStyles = StyleSheet.create({
    view: {
        height: 52,
        padding: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: theme.primaryColors.graphite
    },
    iconView: {
        width: 40,
        alignItems: 'center'
    },
    lastItem: {
        borderBottomWidth: 1
    },
    touchableOpacity: {
        marginLeft: 'auto',
        borderRadius: 40,
        width: 30,
        height: 30,
        padding: 5,
        paddingLeft: 8,
        backgroundColor: theme.primaryColors.EPAMBlue
    },
    text: {
        fontSize: 24,
        marginLeft: 10
    }
});