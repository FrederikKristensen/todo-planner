import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Chores from './pages/Chores';
import Schedule from './pages/Schedule';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chores" element={<Chores />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
