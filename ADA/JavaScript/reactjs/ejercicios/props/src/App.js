import "./App.css";
import { Precio } from "./components";
import { Fecha } from "./components";
import { Pagina } from "./components";
import { PuntajeItem } from "./components";



function App() {
  return (
    <div className="App row" style={{ fontFamily: 'Open Sans', color: 'green' }}>
      <Precio />
      <Fecha fecha='13 Noviembre 1999' />
      <Pagina actual='5' maximo='10' />
      <PuntajeItem lleno={lleno} />
    </div>
  );
}

export default App;
