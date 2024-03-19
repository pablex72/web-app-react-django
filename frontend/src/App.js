import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Problem1 from './pages/Problem1';
import Problem2 from './pages/Problem2';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/problem-1' element={<Problem1 />} />
        <Route path='/problem-2' element={<Problem2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
