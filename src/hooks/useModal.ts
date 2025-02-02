import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function useGlobal() {
    const context = useContext(ModalContext);
    return context;
}