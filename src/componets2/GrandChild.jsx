import { useCount } from "../context/countContext";

function GrandChild() {
    const { count } = useCount();
    return (
        <div>
            ( GrandChild ) count : {count}
            <div>
                <button>AddCount</button>
            </div>
        </div>
    );
}

export default GrandChild;
