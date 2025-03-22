import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import TicketRedemption from './components/TicketRedemption';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/redeem" element={<TicketRedemption />} />
        <Route path="/purchase/:id" element={<TicketPurchase />} />

      </Routes>
    </Router>
  );
}

export default App;
