import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';

function BaseRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default BaseRoutes
