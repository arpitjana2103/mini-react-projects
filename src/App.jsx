import Card from "./components/Card";
import "./index.css";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4rem",
    height: "100vh",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
        </div>
    );
}

export default App;
