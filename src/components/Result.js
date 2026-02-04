import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Result() {
  const { breed } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          setError('Raça não encontrada. Tente outra.');
          setImages([]);
        } else {
          setImages(data.message);
          setError('');
        }
      })
      .catch(() => {
        setError('Erro ao buscar dados. Tente novamente.');
        setImages([]);
      });
  }, [breed]);

  return (
    <div style={{ padding: '20px' }}>
      {/* Botão de voltar em cima */}
      <button
        onClick={() => navigate('/')}
        style={{
          marginBottom: '15px',
          padding: '8px 12px',
          fontSize: '14px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        ← Voltar
      </button>

      <h1>Raça: {breed}</h1>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Dog ${breed}`}
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;


