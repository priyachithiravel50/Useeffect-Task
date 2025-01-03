import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DisplayForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all data from the MockAPI when the page loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login');
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
      <h2>Submitted Data</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.map((user) => (
          <li
            key={user.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone No:</strong> {user.number}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>State:</strong> {user.state}</p>
            <p><strong>Country:</strong> {user.country}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#203864',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default DisplayForm;

