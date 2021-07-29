import { Route, Switch } from 'react-router';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import History from './components/History/History';
import Piggy from './components/Piggy/Piggy';
import PiggyNew from './components/Piggy/PiggyNew';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Preferences" component={Preferences} />
        <Route path="/History" component={History} />
        <Route path="/Login" component={Login} />
        <Route path="/Piggy/:id" component={Piggy} />
        <Route path="/Piggy/new" component={PiggyNew} />
      </Switch>
    </div>
  );
}

export default App;
