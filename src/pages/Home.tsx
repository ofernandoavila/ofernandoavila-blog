import { useLocation } from "react-router-dom";

export function Home() {
    const location = useLocation();
    const { search } = location;
    console.log(location);

    return <h1>{ location.pathname }</h1>;
}