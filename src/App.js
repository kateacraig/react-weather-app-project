import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
          <Weather defaultCity="New York" />
          <footer>
            This project was coded by{" "}
            <a
              href="https://github.com/kateacraig"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Kate Craig
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/kateacraig/react-weather-app-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify
          </footer>
        </div>
      </div>
    </div>
  );
}
