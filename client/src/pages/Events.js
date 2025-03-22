import { useEffect, useState } from 'react';
import { getEvents } from '../api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(response => setEvents(response.data.events));
  }, []);

  return (
    <div className="p-6">
      <h2>Available Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} className="border p-4 my-2">
            <h3>{event.name}</h3>
            <p>{event.date} at {event.venue}</p>
            <p>Price: ${event.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;

