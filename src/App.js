import logo from "./logo.svg";
import "./App.css";
import { PrimerComponente } from "./components/PrimerComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trabajando una aplicación en <br></br>React un framework de
          javaScripts..
        </p>
        <PrimerComponente></PrimerComponente>
      </header>
    </div>
  );
}

export default App;
