import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [breed, setBreed] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (breed.trim() !== '') {
      navigate(`/result/${breed.toLowerCase()}`);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a raça do cachorro"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '300px',
            borderRadius: '15px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            marginLeft: '10px',
            fontSize: '16px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Search;

