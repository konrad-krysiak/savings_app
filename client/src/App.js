import { Route, Switch } from 'react-router';
import './App.css';


import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Auth from './components/Auth/Auth';
import History from './components/History/History';
import Piggy from './components/Piggy/Piggy';
import PiggyNew from './components/Piggy/PiggyNew';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/preferences" component={Preferences} />
        <Route path="/history" component={History} />
        <Route path="/auth" component={Auth} />
        <Route path="/piggy/:id" component={Piggy} />
        <Route path="/piggy/new" component={PiggyNew} />
      </Switch>
    </div>
  );
}

export default App;
