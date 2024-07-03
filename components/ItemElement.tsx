/**
 * @Project my-app
 * @File ItemElement.tsx
 * @Path components
 * @Author BRICE ZELE
 * @Date 03/07/2024
 */

import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from "react-native";
import {Item} from "@/app/context/ItemContext";

type Props = {
    item: Item
    onPress: () => void
}

const ItemElement: React.FC<Props> = ({item, onPress}): React.JSX.Element => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor: item.isActive ? 'black': 'blue' }]}>
            <Text style={styles.text}>{item.value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})

export default ItemElement
