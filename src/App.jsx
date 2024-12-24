import Card from "./components/Card";
import DateCounter from "./components/DateCounter";
import StarRating from "./components/StarRating";
import TextExpander from "./components/TextExpander";

import "./index.css";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4rem",

    padding: "4rem 0",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
            <DateCounter />

            <div>
                <StarRating color="#be4bdb" defaultRating={3} size={5} />
                <StarRating color="#fab005" defaultRating={5} size={10} />
                <StarRating color="#74b816" defaultRating={4} size={15} />
            </div>
        </div>
    );
}

export default App;
