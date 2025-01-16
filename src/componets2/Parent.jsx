import Child1 from "./Child1";
import Child2 from "./Child2";
import { useCount } from "../context/countContext";

function Parent() {
    const { count } = useCount();

    return (
        <div>
            ( Parent ) count : {count}
            <Child1 />
            <Child2 />
        </div>
    );
}

export default Parent;

/*

[[[ CONTEXT (count,) ]]]

1. Parent
    1.1 Child1 ()
    1.2 Child2 ()
        1.3 GrandChild ()
*/
