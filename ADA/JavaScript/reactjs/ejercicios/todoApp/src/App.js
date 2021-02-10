import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AgregarTarea, Tareas, Ejemplo } from "./Screens";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ejemplo" component={Ejemplo} />
        <Route path="/agregar" component={AgregarTarea} />
        <Route path="/" component={Tareas} />
      </Switch>
    </Router>
  );
};

export default App;
