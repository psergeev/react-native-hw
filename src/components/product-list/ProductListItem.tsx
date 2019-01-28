import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProductListItemStyles as styles } from './ProductListItem.styles';
import { AppText } from '../text/AppText';

export interface IProductListItemProps {
    name: string,
    icon: string;
    isLastItem?: boolean;
}

const ProductListItem = ({ name, icon, isLastItem }: IProductListItemProps) => {
    return (
        <View style={[styles.view, isLastItem ? styles.lastItem : null]}>
            <View style={styles.iconView}>
                <Icon name={icon}
                      size={30}
                      color={theme.primaryColors.graphite}/>
            </View>

            <AppText style={styles.text}>{name}</AppText>

            <TouchableOpacity style={styles.touchableOpacity}>
                <Icon name="chevron-right"
                      size={20}
                      color={theme.primaryColors.graphite}/>
            </TouchableOpacity>
        </View>
    );
};

export { ProductListItem };