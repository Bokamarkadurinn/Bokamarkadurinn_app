import './card.css'; // Import CSS styles
import React, { useState, useEffect } from 'react'; // Import React and its hooks

// Define interface for Event object
interface Event {
  id: number;
  mynd: string;
  nafn: string;
  dagsetning: string;
  verd: number;
  lysing: string;
  type: string; // Assuming each event has a "type" property
}

// Define Card component
const Card: React.FC = () => {
  // State variables using useState hook
  const [events, setEvents] = useState<Event[]>([]); // Store events data
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Store selected event
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Control confirmation modal display
  const [filterTypes, setFilterTypes] = useState<string[]>([]); // Store selected filter types
  const [searchQuery, setSearchQuery] = useState<string>(''); // Store search query string

  // Fetch events data on component mount
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

  // Display modal for selected event
  const displayModal = (event: Event) => {
    setSelectedEvent(event);
  };

  // Close modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Handle buy button click
  const handleBuyClick = () => {
    setShowConfirmationModal(true);
  };

  // Handle confirmation button click
  const handleConfirm = () => {
    // Handle confirmation logic here (e.g., proceed with purchase)
    console.log("Confirmed");
    setShowConfirmationModal(false);
  };

  // Handle cancel button click
  const handleCancel = () => {
    setShowConfirmationModal(false);
  };

// Handle filter type change
const handleFilterTypeChange = (type: string) => {
  // If the clicked filter is already active, deselect it
  if (filterTypes.includes(type)) {
    setFilterTypes([]);
  } else {
    // Deselect all filters and activate the clicked one
    setFilterTypes([type]);
  }

  // Toggle active class for all filter buttons
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(button => {
    if (button.textContent === type) {
      button.classList.toggle('active', filterTypes.includes(type)); // Add or remove 'active' class based on filterTypes
    } else {
      button.classList.remove('active');
    }
  });
};

  // Handle search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter events based on selected filter types and search query
  const filteredEvents = events.filter(event => {
    // Check if event matches any filter type
    if (filterTypes.length > 0 && !filterTypes.includes(event.type)) {
      return false;
    }
    // Check if event matches search query
    if (searchQuery && !event.nafn.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Return JSX for rendering
  return (
    <div id="eventList" className="card-container">
      {/* Filter controls */}
      <div className="filter-controls">
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} />
        {/* Buttons for filter types */}
        <div className="filter-buttons">
          <button onClick={() => handleFilterTypeChange("Filter 1")}>Stærfræði</button>
          <button onClick={() => handleFilterTypeChange("Filter 2")}>Íslenska</button>
          <button onClick={() => handleFilterTypeChange("Filter 3")}>Enska</button>
          <button onClick={() => handleFilterTypeChange("Filter 4")}>Danska</button>
         {/* Þarf að fara yfir getur ekki verið takki 
         verður að vera drop down sennilega */} <button onClick={() => handleFilterTypeChange("Filter 5")}>Annað</button>
          {/* Add more buttons for additional filters */}
        </div>
      </div>
  
      {/* Event cards */}
      {filteredEvents.map(event => (
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
  
      {/* Modal and confirmation modal components */}
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
                <button className="buy-button" onClick={handleBuyClick}>Frátaka</button>
              </div>
            </div>
          </div>
        </div>
      )}
  
      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <h1>Viltu taka frá þessa bók?</h1>
            <p>ATH!</p>
            <p>Bækur fara aftur í safn eftir 3 daga</p>
            <div className="confirmation-buttons">
              <button className="confirm-button" onClick={handleConfirm}>Já</button>
              <button className="cancel-button" onClick={handleCancel}>Nei</button>
            </div>
          </div>
        </div>
      )}

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <h1>Viltu taka frá þessa bók?</h1>
            <p>ATH!</p>
            <p>Bækur fara aftur í safn eftir 3 daga</p>
            <div className="confirmation-buttons">
              <button className="confirm-button" onClick={handleConfirm}>Já</button>
              <button className="cancel-button" onClick={handleCancel}>Nei</button>
            </div>
          </div>
        </div>
      )}

      {/* Inline styling for this component */}
      <style jsx>{`
        // Add your CSS styles here
      `}</style>
    </div>
  );
};

export default Card; // Export Card component
