import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/SignUp'
import Confirmation from './pages/Confirmation';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/success" element={<Confirmation/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
