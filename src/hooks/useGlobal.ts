import { useContext } from "react";
import { globalContext } from "../contexts/GlobalContext";

export function useGlobal() {
    const context = useContext(globalContext);
    return context;
}