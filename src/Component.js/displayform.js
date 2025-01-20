import React, { useEffect, useState } from 'react'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useNavigate } from 'react-router-dom';

function Datastorage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (row) => {
    navigate('/register', { state: { rowData: row } });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login/`, {
        method: 'DELETE',
      });
      setData(data.filter((row) => row.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className='paper'style={{backgroundImage:'linear-gradient(pink,skyblue)',height:'100vh',display:'flex'}}>
      {/* <div><i class="fa-solid fa-bell"></i></div> */}
       
      <div style={{display:'block',marginTop:'20px',marginLeft:'30px'}}> 
        <p style={{marginLeft:'-15px'}}>Flex Proposals</p>
       {/* <p style={{}}> <i class="fa-solid fa-bell"></i></p> */}
        <p style={{marginTop:'30px'}}><i class="fa-brands fa-windows"></i> Dashboard</p>
      
        <p style={{marginTop:'20px'}}>Proposals</p>

        <p style={{marginTop:'40px',marginLeft:'-15px'}}>INVENTORY</p>
        <p style={{marginTop:'30px'}}><i class="fa-solid fa-building"></i> Operators</p>
        <p style={{marginTop:'20px'}}><i class="fa-solid fa-location-dot"></i> centers</p>
        <p style={{marginTop:'20px'}}><i class="fa-brands fa-intercom"></i> Inventory</p>
        <p style={{marginTop:'230px'}}> <i class="fa-solid fa-circle-user"></i> Profile</p>
        <p style={{marginTop:'30px'}}><i class="fa-solid fa-gear"></i> Settings</p>
        <p style={{marginTop:'30px'}}><i class="fa-solid fa-right-from-bracket"></i> Logout</p>
        </div>
      
    <TableContainer component={Paper} style={{ margin: '20px auto', maxWidth: '80%',marginLeft:'10%',marginTop:'50px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(row)} style={{ color: 'green',marginLeft:'-50px' }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.id)} style={{ color: 'red',marginLeft:'-50px' }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Datastorage;
