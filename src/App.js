import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import HomePage from './components/pages/homePage';
import ProblemList from './components/pages/problem';
import ProblemDetail from './components/pages/problem/problemDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<h1>Hello world</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/problems" element={<ProblemList />} />
      <Route path="/problem" element={<ProblemDetail />} />
    </Routes>
  );
}

export default App;
