"use client";
import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";
import { useRef } from "react";
import persistStore from "redux-persist/es/persistStore";

export const StoreProvider = ({children}) => {
    const storeRef = useRef(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}