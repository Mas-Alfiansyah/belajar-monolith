import React from 'react';
// import { Toaster } from 'react-hot-toast';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/layouts/Menu';
import { MajorProvider } from './context/MajorContext';
import Dashboard from './pages/Dashboard';
import Students from './pages/students/Student';
import Majors from './pages/majors/Major';

function App() {
  return (
    <Menu>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <ToastContainer 
        position="top-right"
        autoClose={2500} // Durasi 3 detik
        hideProgressBar={false} // Munculkan bar progres
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide} // Animasi masuk kanan, keluar kanan
      />
      <MajorProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/majors" element={<Majors />} />
        </Routes>
      </MajorProvider>
    </Menu>
  );
}

export default App;
