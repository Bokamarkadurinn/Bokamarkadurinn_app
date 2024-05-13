import './card.css'; // Import CSS styles
import React, { useState, useEffect } from 'react'; // Import React and its hooks
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';

// Define interface for Event object
interface Event {
  id: number; // ID bókar
  seller_id: number; // ID seljanda
  mynd: string; // Mynd af framhlið bókar   !!! Ekki í DB eins og er !!!
  entered_into: string; // Dagsetning innsetningar
  name_of_book: string; // Titill bókar
  name_of_auth: string; // Nafn seljanda
  price: number; // Verð bókar
  lysing: string; // Lýsing bókar   !!! Ekki í DB eins og er !!!
  filter_id: number; // ID námsgreinar
  // type: string;
}

// Nær í API key úr local
async function getAPIKey() {
  try {
    const response = await fetch('/apikey.txt');
    const key = await response.text();
    return key;
  } catch (error) {
    console.error(error);
  }
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
    async function getData() {
      try {

        const SUPABASE_URL = 'https://qisbrbynjzxmpdhbpyqb.supabase.co/';
        const SUPABASE_KEY = await getAPIKey();

        const SUPABASE = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { data, error } = await SUPABASE
          .from('books')
          .select('*');

        if (error) {
          console.error(error);
        } else {
          console.log(data);
          setEvents(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getData();
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
const handleFilterTypeChange = (filter_id: number) => {
  // If the clicked filter is already active, deselect it
  if (filterTypes.includes(filter_id)) {
    setFilterTypes([]);
  } else {
    // Deselect all filters and activate the clicked one
    setFilterTypes([filter_id]);
  }

  // Toggle active class for all filter buttons
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(button => {
    if (button.textContent === filter_id) {
      button.classList.toggle('active', filterTypes.includes(filter_id)); // Add or remove 'active' class based on filterTypes
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
    if (filterTypes.length > 0 && !filterTypes.includes(event.filter_id)) {
      return false;
    }
    // Check if event matches search query
    if (searchQuery && !event.name_of_book.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Return JSX for rendering
  return (
    <main>
      {/* Filter controls */}
      <div className="filter-controls">
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} />
        {/* Buttons for filter types */}
        <div className="filter-buttons">
          <button onClick={() => handleFilterTypeChange(2)}>Stærfræði</button>
          <button onClick={() => handleFilterTypeChange(3)}>Íslenska</button>
          <button onClick={() => handleFilterTypeChange(1)}>Enska</button>
          <button onClick={() => handleFilterTypeChange(4)}>Danska</button>
         {/* Þarf að fara yfir getur ekki verið takki 
         verður að vera drop down sennilega */} <button onClick={() => handleFilterTypeChange(5)}>Annað</button>
          {/* Add more buttons for additional filters */}
        </div>
      </div>
      <div id="eventList" className="card-container">
      {/* Event cards */}
      {filteredEvents.map(event => (
        <div className="event-card" key={event.id} onClick={() => displayModal(event)}>
          <div className="card-content">
            <div className="card-image">
              <Image src={event.mynd} alt={event.name_of_book} />
            </div>
            <div className="card-text">
              <h2>{event.name_of_book}</h2>
              <p>Dags: {new Date(event.entered_into).toLocaleDateString()}</p>
              <p>Verð: {event.price} kr.</p>
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
                <img src={selectedEvent.mynd} alt={selectedEvent.name_of_book} />
              </div>
              <div className="modal-text">
                <h2>{selectedEvent.name_of_book}</h2>
                <p>Dagsetning: {new Date(selectedEvent.entered_into).toLocaleDateString()}</p>
                <p>Verð: {selectedEvent.price}</p>
                <p>Lýsing: {selectedEvent.lysing}</p>
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
    </main>
  );
};

export default Card; // Export Card component
