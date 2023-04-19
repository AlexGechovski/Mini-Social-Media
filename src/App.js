import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import View from './pages/View';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
