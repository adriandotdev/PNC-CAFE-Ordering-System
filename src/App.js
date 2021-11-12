import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Login />}/>
        </Routes>
    </Router>
  );
}

export default App;
