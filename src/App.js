import { 
  BrowserRouter, 
  Route, 
  Navigate, 
  Routes, 
  Outlet, 
  useLocation 
} from 'react-router-dom';

import Login from './pages/Login/Login';

import './App.css';
import Register from './pages/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Route> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
