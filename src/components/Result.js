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
      });
  }, [breed]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Raça: {breed}</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Dog ${breed}`} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          ))}
        </div>
      )}
      <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 15px', fontSize: '16px' }}>
        Voltar
      </button>
    </div>
  );
}

export default Result;
