import { useState } from "react";
import Personajes from "./Componentes/personajes";
import "./App.css";
import Episodios from "./Componentes/Episodios";

function App() {
  const [vista, setVista] = useState("personajes"); // Unificamos el estado en una sola variable

  return (
    <div className="App">
      <h1>RICK AND MORTY API</h1>

      <nav>
        <button onClick={() => setVista("personajes")}>Ver Personajes</button>
        <button onClick={() => setVista("episodios")}>Ver Episodios</button>
      </nav>

      <div>
        {vista === "personajes" && <Personajes />}
        {vista === "episodios" && <Episodios />} {/* Eliminamos el espacio adicional */}
      </div>
    </div>
  );
}

export default App;
