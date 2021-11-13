import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import SignupPage from './Pages/SignupPage'
import Sample from './Pages/Sample'

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/sample" element={<Sample />} />
        </Routes>
    </Router>
  );
}

export default App;
