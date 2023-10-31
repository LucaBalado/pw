import { Characters } from "./components/characters/Characters";
import "./app.css";
import Svg from "./components/Svg";

function App() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="header_list">
            <li>
              <a className="documentos" href="/documentation">
                Docs
              </a>
            </li>
            <li>
              <a className="about" href="/about">
                About
              </a>
            </li>
            <li>
              <span className="apoyar">Support Us</span>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="encabezado">
          <h1>The Rick and Morty API</h1>
          <div>
            <Svg />
          </div>
        </div>
        <div className="grilla">
          <Characters />
        </div>
      </main>
      <footer className="pie">
        <p className="creditos">by Luca Balado 2023</p>
      </footer>
    </>
  );
}
export default App;
