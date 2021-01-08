//ESTA PAGINA ES COMO MI HTML. Lo que se ve en pagina.
import { Button } from "./Button"

// import logo from './logo.svg';
// import './App.css';
//borro el AppCSS, logo, AppTest, set-up, index.css y reportWebVitals

//COMPONENTES - empiezan en mayus; tengo que exportarlo en el archivo que necesito (si esta en A y lo quiero usar en B tengo que exportarlo)
//Esto es JSX NO HTML (interprete que me crea el elemento h1 en este caso y lo convierte en JS y de esta manera lo puedo ver en el browser)
// <App /> - se representan de esta manera; lo llamamos.
//Para crear un componente = con funciones o clases.
const App = () => {
  //cambio a arrow function
  return ( //retorna solo 1 elemento
    //esto es para separar elemento sin crear uno nuevo en el DOM.
    <>
      <h1>Clase 91 de repaso</h1>
      <Button />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
