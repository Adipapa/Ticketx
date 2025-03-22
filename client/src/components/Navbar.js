import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <h1 className="text-xl">TicketX</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/events" className="mr-4">Events</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

