import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Event {
  id: number;
  mynd: string;
  nafn: string;
  dagsetning: string;
  verd: number;
  lysing: string;
}

const Card: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    fetch('/vidburdir.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const displayModal = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleBuyClick = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here (e.g., proceed with purchase)
    console.log("Confirmed");
    setShowConfirmationModal(false);
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div id="eventList" className="card-container">
      {events.map(event => (
        <div className="event-card" key={event.id} onClick={() => displayModal(event)}>
          <div className="card-content">
            <div className="card-image">
              <img src={event.mynd} alt={event.nafn} />
            </div>
            <div className="card-text">
              <h2>{event.nafn}</h2>
              <p>Dags: {event.dagsetning}</p>
              <p>Verd: {event.verd}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <div className="modal-content-inner">
              <div className="modal-image">
                <img src={selectedEvent.mynd} alt={selectedEvent.nafn} />
              </div>
              <div className="modal-text">
                <h2>{selectedEvent.nafn}</h2>
                <p>Date: {selectedEvent.dagsetning}</p>
                <p>Price: {selectedEvent.verd}</p>
                <p>Description: {selectedEvent.lysing}</p>
                <button className="buy-button" onClick={handleBuyClick}>Kaupa</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <p>Are you sure you want to proceed with the purchase?</p>
            <div className="confirmation-buttons">
              <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}


      <style jsx>{`
        /* Card Container */
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
          gap: 20px;
        }

        /* Event Card */
        .event-card {
          color: #000;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 10px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .event-card:hover {
          transform: translateY(-5px);
        }

        .card-content {
          display: flex;
        }

        .card-image {
          width: 40%;
        }

        .card-image img {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
          border-radius: 10px 0 0 10px;
        }

        .card-text {
          width: 60%;
          padding: 0 10px;
        }

        /* Modal */
        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
        }

        /* Modal Content */
        .buy-button {
          background-color: purple;
          color: white;
          padding: 10px 20px;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .buy-button:hover {
          background-color: pink;
        }

        .modal-content {
          color: #000;
          background-color: #fefefe;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 60%;
          border-radius: 10px;
          position: relative;
        }

        .close {
          color: #aaa;
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }

        .close:hover {
          color: black;
        }

        .modal-content-inner {
          display: flex;
        }

        .modal-image {
          width: 40%;
        }

        .modal-image img {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
          border-radius: 10px 0 0 10px;
        }

        .modal-text {
          width: 60%;
          padding: 0 10px;
        }
        /* Confirmation Modal */
        .confirmation-modal {
          position: fixed;
          z-index: 10;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
      
        .confirmation-modal-content {
          text-align: center;
        }
      
        .confirmation-buttons {
          margin-top: 20px;
        }
      
        .confirm-button,
        .cancel-button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
      
        .confirm-button {
          background-color: #4CAF50;
          color: #fff;
        }
      
        .cancel-button {
          background-color: #f44336;
          color: #fff;
          margin-left: 10px;
        }
      
        .confirm-button:hover,
        .cancel-button:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default Card;
