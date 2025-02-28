import React from 'react';

function MonumentCard({ monument, onEdit, onDelete }) {
  return (
    <div className="monument-card">
      <div className="image-container" onClick={() => onEdit(monument)}>
        <img 
          src={monument.image} 
          alt={monument.name} 
          className="monument-image" 
        />
      </div>
      <div className="monument-details">
        <h3>{monument.name}</h3>
        <p className="description">{monument.description}</p>
        <p className="city"><strong>City:</strong> {monument.city}</p>
        <button 
          className="delete-button" 
          onClick={() => onDelete(monument.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MonumentCard;