import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/login';
import Signup from './components/pages/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
