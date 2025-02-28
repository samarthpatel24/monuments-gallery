import React, { useState } from 'react';
import './App.css';
import MonumentGrid from './components/MonumentGrid';
import MonumentForm from './components/MonumentForm';
import SearchBar from './components/SearchBar';

// Import local images
import chinaImage from './images/china.jpg';
import christRedeemerImage from './images/christ_redeemer.jpeg';
import petraImage from './images/petra.jpg';
import statueOfLibertyImage from './images/statue_of_liberty.jpg';
import sydneyImage from './images/sydney.jpg';
import tajMahalImage from './images/taj_mahal.jpg';

function App() {
  const [monuments, setMonuments] = useState([
    { 
      id: 1, 
      name: 'Eiffel Tower', 
      description: 'Iconic wrought-iron lattice tower on the Champ de Mars.', 
      city: 'Paris',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg'
    },
    { 
      id: 2, 
      name: 'Taj Mahal', 
      description: 'An ivory-white marble mausoleum on the right bank of the Yamuna river.', 
      city: 'Agra',
      image: tajMahalImage
    },
    { 
      id: 3, 
      name: 'Statue of Liberty', 
      description: 'A colossal neoclassical sculpture on Liberty Island.', 
      city: 'New York City',
      image: statueOfLibertyImage
    },
    { 
      id: 4, 
      name: 'Colosseum', 
      description: 'An oval amphitheater in the center of the city.', 
      city: 'Rome',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg'
    },
    { 
      id: 5, 
      name: 'Great Wall of China', 
      description: 'A series of fortifications made of stone, brick, and other materials.', 
      city: 'Beijing',
      image: chinaImage
    },
    { 
      id: 6, 
      name: 'Machu Picchu', 
      description: 'A 15th-century Inca citadel situated on a mountain ridge.', 
      city: 'Cusco Region',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg'
    },
    { 
      id: 7, 
      name: 'Petra', 
      description: 'A historical and archaeological city famous for its rock-cut architecture.', 
      city: 'Ma\'an Governorate',
      image: petraImage
    },
    { 
      id: 8, 
      name: 'Christ the Redeemer', 
      description: 'An Art Deco statue of Jesus Christ.', 
      city: 'Rio de Janeiro',
      image: christRedeemerImage
    },
    { 
      id: 9, 
      name: 'Sydney Opera House', 
      description: 'A multi-venue performing arts center.', 
      city: 'Sydney',
      image: sydneyImage
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingMonument, setEditingMonument] = useState(null);

  const filteredMonuments = monuments.filter(monument => 
    monument.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addMonument = (monument) => {
    const newMonument = { 
      ...monument, 
      id: monuments.length + 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Placeholder_Monument.jpg/300px-Placeholder_Monument.jpg' // Placeholder for new monuments
    };
    setMonuments([...monuments, newMonument]);
    setShowAddForm(false);
  };

  const updateMonument = (updatedMonument) => {
    setMonuments(monuments.map(monument => 
      monument.id === updatedMonument.id ? updatedMonument : monument
    ));
    setEditingMonument(null);
  };

  const deleteMonument = (id) => {
    setMonuments(monuments.filter(monument => monument.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monuments Gallery</h1>
        <div className="controls">
          <button 
            className="add-button" 
            onClick={() => setShowAddForm(true)}
          >
            Add Monument
          </button>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </header>

      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Monument</h2>
            <MonumentForm onSubmit={addMonument} onCancel={() => setShowAddForm(false)} />
          </div>
        </div>
      )}

      {editingMonument && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Monument</h2>
            <MonumentForm 
              monument={editingMonument} 
              onSubmit={updateMonument} 
              onCancel={() => setEditingMonument(null)}
            />
          </div>
        </div>
      )}

      <MonumentGrid 
        monuments={filteredMonuments} 
        onEdit={setEditingMonument} 
        onDelete={deleteMonument}
      />
    </div>
  );
}

export default App;
