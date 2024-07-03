
/**
 * @Project test-app
 * @File ItemContext.ts
 * @Path app/context
 * @Author BRICE ZELE
 * @Date 03/07/2024
 */
export type Item = {
    isActive: boolean
    value: number
}
type ItemContextType = {
    items: Item[]
    toggleItem: (value: Item) => void
}

import {createContext} from "react";

export const ItemContext = createContext<ItemContextType | undefined>(undefined)
