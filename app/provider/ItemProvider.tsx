/**
 * @Project test-app
 * @File ItemProvider.ts
 * @Path app/provider
 * @Author BRICE ZELE
 * @Date 03/07/2024
 */
import React, {PropsWithChildren, useState} from "react";
import {Item, ItemContext} from "../context/ItemContext";

const ARRAY_SIZE = 100
const lists: Item[] = Array.from({length: ARRAY_SIZE}).map((_, index) => ({value: index, isActive: false}))

export const ItemProvider: React.FC<PropsWithChildren> = ({children}): React.JSX.Element => {

    const [items, setItems] = useState<Item[]>(lists)

    const toggleItem = (item: Item) => {
        setItems((prevItems) =>
            prevItems.map((elt) =>
                elt.value === item.value  ? { ...elt, isActive: !elt.isActive } : elt
            )
        );
    }

    return (
        <ItemContext.Provider value={{items, toggleItem}}>
            {children}
        </ItemContext.Provider>
    )
}
