import { useCount } from "../context/countContext";

function Child1() {
    const { count } = useCount();

    return <div>(Child 1) Count : {count}</div>;
}

export default Child1;
