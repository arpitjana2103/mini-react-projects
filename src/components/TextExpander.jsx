import { useState } from "react";

const textStyle = {
    maxWidth: "40rem",
};

const rawText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                nihil quia cum alias harum voluptatem aliquam odio eum rerum
                dolor maxime, laborum dolorum iure magni quos, aut consequatur
                doloribus sunt.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nobis nihil quia cum alias harum voluptatem
                aliquam odio eum rerum dolor maxime, laborum dolorum iure magni
                quos, aut consequatur doloribus sunt.Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nobis nihil quia cum alias harum
                voluptatem aliquam odio eum rerum dolor maxime.`;

function TextExpander() {
    const [show, setShow] = useState(false);

    // Derived State
    const text = show ? rawText : rawText.slice(0, 100);

    function handleClick() {
        setShow((show) => !show);
    }

    return (
        <div style={textStyle}>
            <p>{text}</p>
            <button onClick={handleClick}>
                {show ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}

export default TextExpander;
