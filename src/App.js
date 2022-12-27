import './App.css';
import Parent from './components/Parent.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact path="/"
          element={<Parent />}
        >

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
