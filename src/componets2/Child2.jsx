import { useCount } from "../context/countContext";
import GrandChild from "./GrandChild";

function Child2() {
    const { count } = useCount();
    return (
        <div>
            ( Child 2 ) count : {count}
            <GrandChild />
        </div>
    );
}

export default Child2;
