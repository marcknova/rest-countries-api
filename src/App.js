import { Route, Routes } from 'react-router-dom';
import './App.css'
import Description from './components/Description';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="dark:bg-dark2 h-screen">
    <Navbar/> 
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/description/:name" element={<Description/>} />
    </Routes>
    </div>
  );
}

export default App;
