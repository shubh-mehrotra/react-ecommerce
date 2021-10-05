import "./App.css";
import Header from './components/common/Header';
import { Login as AdminLogin } from "./components/admin/Login";
import { Login as CustomerLogin } from "./components/customer/Login";
import { Dashboard as AdminDashboard } from "./components/admin/Dashboard";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="box-container">
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/admin/login' component={AdminLogin} />
            <Route path='/admin/dashboard' component={AdminDashboard} />
            <Route path="/customer/login" component={CustomerLogin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
    <div className="page-content home-page">
      <p>Please login here</p>
      <ul className="login-links">
        <Link to="/customer/login">As a customer</Link>
        <Link to="/admin/login">As a admin</Link>
      </ul>
    </div>
)

export default App;
