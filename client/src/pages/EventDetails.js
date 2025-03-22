import React from "react";
import { useParams } from "react-router-dom";

const eventDetails = {
  1: {
    name: "City Louder Concert",
    date: "Dec 7, 2024",
    time: "8:00 PM",
    location: "QCity, Gambia",
    organizer: "BadBoy Dada Ent.",
    tickets: [
      { type: "Standing Pit", price: "D400" },
      { type: "VIP", price: "D1000" },
      { type: "Table (5 People)", price: "D25,000" },
    ],
    description:
      "Join us for the biggest music concert of the year at QCity! Featuring special guest artists and more.",
    image: "/assets/event1.jpg",
  },
  2: {
    name: "Hussain Dada Live",
    date: "Jan 15, 2025",
    time: "6:00 PM",
    location: "Independence Stadium",
    organizer: "Hussain Dada Team",
    tickets: [
      { type: "General", price: "D500" },
      { type: "VIP", price: "D1500" },
    ],
    description:
      "An exclusive live performance by Hussain Dada at Independence Stadium.",
    image: "/assets/event2.jpg",
  },
};

const TicketDetails = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  if (!event) return <p>Event not found</p>;

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <img src={event.image} alt={event.name} className="w-full rounded-md" />
      <h2 className="text-xl font-bold mt-3">{event.name}</h2>
      <p className="text-sm text-gray-500">
        📅 {event.date} ⏰ {event.time}
      </p>
      <p className="text-sm text-gray-500">📍 {event.location}</p>

      <h3 className="mt-4 font-semibold">Tickets</h3>
      <ul>
        {event.tickets.map((ticket, index) => (
          <li key={index} className="text-sm">
            🎟 {ticket.type} - {ticket.price}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Organizer</h3>
      <p className="text-sm">{event.organizer}</p>

      <h3 className="mt-4 font-semibold">Event Description</h3>
      <p className="text-sm text-gray-600">{event.description}</p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Get Tickets
      </button>
    </div>
  );
};

export default TicketDetails;
