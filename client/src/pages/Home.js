import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    name: "City Louder Concert",
    date: "Dec 7, 2024",
    time: "8:00 PM",
    location: "QCity, Gambia",
    image: "/assets/event1.jpg",
  },
  {
    id: 2,
    name: "Hussain Dada Live",
    date: "Jan 15, 2025",
    time: "6:00 PM",
    location: "Independence Stadium",
    image: "/assets/event2.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-md">
        <h1 className="font-bold text-lg">TicketX</h1>
        <input
          type="text"
          placeholder="Search events..."
          className="border p-2 rounded-md"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 my-4">
        {["Upcoming", "This Weekend", "Music", "Movie"].map((filter) => (
          <button key={filter} className="px-3 py-1 bg-gray-200 rounded-md">
            {filter}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex bg-white p-3 rounded-md shadow-md cursor-pointer"
            onClick={() => navigate(`/ticket/${event.id}`)}
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-20 h-20 rounded-md"
            />
            <div className="ml-3">
              <h3 className="font-semibold">{event.name}</h3>
              <p className="text-sm text-gray-500">{event.date} - {event.time}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

