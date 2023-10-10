import { Characters } from "./components/characters/Characters";
import "./app.css";

function App() {
  return (
    <>
      <div className="encabezado">
        <h1>The Rick and Morty API</h1>
      </div>
      <div className="grilla">
        <Characters />
      </div>
    </>
  );
}
export default App;
