import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo } from "./Screens/Ejemplo";
import { AgregarTarea } from "./Screens/Agregar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Ejemplo" component={Ejemplo} />
        <Route path="/" component={AgregarTarea} />
      </Switch>
    </Router>
  );
};

export default App;
