import { useLocation } from "react-router-dom";
import { BasicView } from "../components/basic-view/BasicView";
import { useEffect } from "react";

export function Home() {
    const location = useLocation();

    useEffect(() => {
    }, []);

    return (
        <BasicView>
            <h1>{ location.pathname }</h1>
        </BasicView>
    );
}