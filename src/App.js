import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import HomePage from './components/pages/homePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<h1>Hello world</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
