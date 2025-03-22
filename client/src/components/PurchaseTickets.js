import { useState } from 'react';
import { purchaseTicket } from '../api';

const PurchaseTicket = ({ eventId }) => {
  const [purchaser, setPurchaser] = useState('');
  const [ticket, setTicket] = useState(null);

  const handlePurchase = () => {
    purchaseTicket({ eventId, purchaser })
      .then(response => setTicket(response.data.ticket))
      .catch(error => console.error('Error purchasing ticket:', error));
  };

  return (
    <div>
      <h3>Purchase Ticket</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={purchaser}
        onChange={(e) => setPurchaser(e.target.value)}
        className="border p-2"
      />
      <button onClick={handlePurchase} className="bg-green-500 text-white p-2 ml-2">Buy Ticket</button>

      {ticket && (
        <div>
          <h4>Ticket Purchased</h4>
          <p>QR Code: {ticket.qrCode}</p>
        </div>
      )}
    </div>
  );
};

export default PurchaseTicket;

