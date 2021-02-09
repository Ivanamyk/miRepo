import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo } from "./Screens/Ejemplo";
import { AgregarTarea } from "./Screens/Agregar";
import { Home } from "./Screens/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ejemplo" component={Ejemplo} />
        <Route path="/agregar" component={AgregarTarea} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
