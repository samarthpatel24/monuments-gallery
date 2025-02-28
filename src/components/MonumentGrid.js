import React from 'react';
import MonumentCard from './MonumentCard';

function MonumentGrid({ monuments, onEdit, onDelete }) {
  return (
    <div className="monument-grid">
      {monuments.length === 0 ? (
        <p className="no-monuments">No monuments found. Add one or adjust your search.</p>
      ) : (
        monuments.map(monument => (
          <MonumentCard 
            key={monument.id} 
            monument={monument} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))
      )}
    </div>
  );
}

export default MonumentGrid;