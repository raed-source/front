import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Register />
      <Router>
        <Route exact path='/register'><Register /></Route>
        <Route exact path='/login'><Login /></Route>
        <Route exact path='/post/:id'><Post /></Route>
        <Route exact path='NotFound'><NotFound /></Route>
      </Router>
    </div >
  );
}

export default App;
