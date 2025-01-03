import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Display() {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const submittedData = location.state?.submittedData; // Get the submitted data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/useeffect');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>


      <h2>All Data</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <p><strong>Name:</strong> {user.Name}</p>
            <p><strong>Password:</strong> {user.Password}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Display;