import { useLocation } from "react-router-dom";
import { BasicView } from "../components/basic-view/BasicView";
import { useEffect } from "react";
import { WPService } from "../services/WPService";

export function Home() {
    const location = useLocation();

    useEffect(() => {
        const service = new WPService();
        service.get_settings().then(data => console.log(data))
    }, []);

    return (
        <BasicView>
            <h1>{ location.pathname }</h1>
        </BasicView>
    );
}