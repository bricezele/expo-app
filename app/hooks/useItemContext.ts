/**
 * @Project test-app
 * @File useItemContext.ts
 * @Path app/hooks
 * @Author BRICE ZELE
 * @Date 03/07/2024
 */
import {useContext} from "react";
import {ItemContext} from "@/app/context/ItemContext";

export const useItemContext = () => {
    const context =  useContext(ItemContext)
    if(!context)
        throw new Error('useItemContext must be used within an ItemProvider')

    return context
}
