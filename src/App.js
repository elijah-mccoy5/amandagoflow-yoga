import './App.css';
import Home from './screens/home'
import About from './screens/about'
import Fitness from './screens/fitness'
import Zoom from './screens/zoom'
import { Route, Switch } from 'react-router-dom';
import Classes from './screens/classes';
import Private from './screens/private';
import Checkout from './screens/checkout';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
         <Route  path="/classes" component={Classes}/>
         <Route  path="/zoom" component={Zoom}/>
         <Route  path="/fitness" component={Fitness}/>
         <Route  path="/private" component={Private}/>
         <Route  path="/checkout" component={Checkout}/>
      </Switch>

    </div>
  );
}

export default App;
