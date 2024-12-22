function Comp() {
    let counter = 1;
    function handleClick() {
        counter++;
    }

    return (
        <div>
            <button onClick={handleClick}>click me</button>
            {counter}
        </div>
    );
}

export default Comp;
