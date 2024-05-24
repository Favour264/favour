import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login'; 
import Support from './pages/Support';
import RequestD from './pages/RequestD';
import RequestD2 from './pages/RequestD2'
import RequestD3 from './pages/RequestD3'


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/support" element={<Support />} />
        <Route path="/RequestD" element={<RequestD />} />
        <Route path="/RequestD2" element={<RequestD2 />} />
        <Route path="/RequestD3" element={<RequestD3 />} />
      </Routes>
  );
};

export default App;
