import { Route, Switch } from 'react-router';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login/Login';
import History from './components/History/History';

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
      </Switch>
    </div>
  );
}

export default App;
