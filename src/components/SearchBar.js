import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search monuments..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button 
          className="clear-search" 
          onClick={() => setSearchTerm('')}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;