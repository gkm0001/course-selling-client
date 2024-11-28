import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSignup from './routes/user-signup/user-signup';
import Home from './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './routes/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CardHoverEffectDemo/>} /> */}
        <Route path='/' element={<Dashboard/>}>
      
        </Route>

         
      </Routes>
    </Router>
  );
}
export default App;