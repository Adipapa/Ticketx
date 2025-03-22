import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";

const eventDetails = {
  1: {
    name: "City Louder Concert",
    date: "Dec 7, 2024",
    time: "8:00 PM",
    location: "Independence Stadium",
    image: "/assets/event1.jpg",
    tickets: [
      { type: "Ordinary", price: "D400" },
      { type: "VIP", price: "D1000" },
      { type: "Table 5 People", price: "D25,000" },
      { type: "Table 10 People", price: "D50,000" },
    ],
  },
  2: {
    name: "Hussain Dada Live",
    date: "Jan 15, 2025",
    time: "6:00 PM",
    location: "QCity, Gambia",
    image: "/assets/event2.jpg",
    tickets: [
      { type: "General", price: "D500" },
      { type: "VIP", price: "D1500" },
    ],
  },
};

const TicketPurchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventDetails[id];

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  if (!event) return <p>Event not found</p>;

  const handlePayment = () => {
    if (!selectedTicket || !paymentMethod) {
      alert("Please select a ticket and payment method.");
      return;
    }

    // Simulating payment processing
    setTimeout(() => {
      setIsPaid(true);
    }, 2000);
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 p-3 rounded-md shadow-md flex">
        <img src={event.image} alt={event.name} className="w-16 h-16 rounded-md" />
        <div className="ml-3">
          <h3 className="font-bold">{event.name}</h3>
          <p className="text-sm text-gray-500">📅 {event.date} ⏰ {event.time}</p>
          <p className="text-sm text-gray-500">📍 {event.location}</p>
        </div>
      </div>

      {/* Ticket Options */}
      <div className="mt-4">
        {event.tickets.map((ticket, index) => (
          <button
            key={index}
            className={`w-full p-3 mb-2 rounded-md ${
              selectedTicket === ticket ? "bg-blue-300" : "bg-gray-200"
            }`}
            onClick={() => setSelectedTicket(ticket)}
          >
            {ticket.type} - {ticket.price}
          </button>
        ))}
      </div>

      {/* Payment Methods */}
      <h3 className="mt-4 font-semibold">Choose Payment Method</h3>
      <div className="space-y-2">
        {["Wave", "Afrimoney", "Flutterwave"].map((method) => (
          <button
            key={method}
            className={`w-full p-3 rounded-md ${
              paymentMethod === method ? "bg-blue-300" : "bg-gray-200"
            }`}
            onClick={() => setPaymentMethod(method)}
          >
            {method}
          </button>
        ))}
      </div>

      {/* Payment Button */}
      {!isPaid ? (
        <button
          className="mt-4 bg-blue-500 text-white w-full p-3 rounded-md"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      ) : (
        <div className="mt-4 p-4 bg-white shadow-md text-center">
          <h3 className="font-semibold">Payment Successful! 🎉</h3>
          <p>Your ticket has been generated.</p>
          <QRCode value={`Event: ${event.name}, Ticket: ${selectedTicket.type}, Date: ${event.date}`} />
          <button
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/")}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketPurchase;

