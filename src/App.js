
import './App.css';
import RegistrarMasterpage from './pages/registrar/masterpage';
import Registrar_Courses from './pages/registrar/courses';
import Registrar_Guardian from './pages/registrar/guardian';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    
    <Router>
      <div>
    <Switch>
    <Route exact path="/">
     <RegistrarMasterpage />
    </Route>
    
    <Route  path="/registrar/courses">
     <Registrar_Courses />
    </Route>

    <Route path="/registrar/guardian">
    <Registrar_Guardian/>
    </Route>

    </Switch>
   </div> 
    </Router>


  );
}

export default App;
