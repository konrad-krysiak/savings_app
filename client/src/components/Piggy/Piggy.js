import { useParams } from "react-router";

const Piggy = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Piggy {id}</h1>
        </div>
    )
}

export default Piggy;
