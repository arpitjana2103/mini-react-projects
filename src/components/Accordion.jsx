import { useState } from "react";
import styles from "../style/Accordion.module.css";

function Accordion(props) {
    const { contents, color } = props;
    const [open, setOpen] = useState(false);

    return (
        <div>
            {contents.map(function (content, index) {
                return (
                    <Row
                        title={content.title}
                        details={content.details}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

function Row(props) {
    const { title, details } = props;

    return (
        <div>
            <h3>{title}</h3>
            <p>{details}</p>
        </div>
    );
}

export default Accordion;
