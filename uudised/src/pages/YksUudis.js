import { useParams } from "react-router-dom";

function YksUudis() {
    const { index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    const otsitudUudis = uudisedLS[index];

    return ( <div>{otsitudUudis}</div> );
}

export default YksUudis;