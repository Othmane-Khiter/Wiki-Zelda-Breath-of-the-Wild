import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Creatures from './pages/Creatures';
import Equipments from './pages/Equipments';
import Materials from './pages/Materials';
import Monsters from './pages/Monsters';
import Treasures from './pages/Treasures';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faune" element={<Creatures />} />
        <Route path="/equipements" element={<Equipments />} />
        <Route path="/matériaux" element={<Materials />} />
        <Route path="/bestiaire" element={<Monsters />} />
        <Route path="/minerais" element={<Treasures />} />
      </Routes>
    </>
  );
}

export default App;
