import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function DisplayForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData = location.state?.formData;

  const [formData, setFormData] = useState(initialData);

  // Handle Edit button click
  const handleEdit = () => {
    navigate("/register", { state: { formData } }); // Pass formData to the Register form for editing
  };

  // Handle Delete button click
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      setFormData(null); // Remove the data
    }
  };

  if (!formData) {
    return <h2>No data available!</h2>;
  }

  return (
    <TableContainer component={Paper} style={{ maxWidth: "80%", margin: "20px auto",marginTop:'50px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>S/No</b></TableCell>
            <TableCell><b>NAME</b></TableCell>
            <TableCell><b>EMAIL</b></TableCell>
            <TableCell><b>PASSWORD</b></TableCell>
            <TableCell><b>ADDRESS</b></TableCell>
            <TableCell><b>ACTION</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>{formData.firstName} {formData.lastName}</TableCell>
            <TableCell>{formData.email}</TableCell>
            <TableCell>{formData.password}</TableCell>
            <TableCell>{formData.address}</TableCell>
            <TableCell>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Action buttons layout */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <IconButton
                    color="primary"
                    onClick={handleEdit}
                    style={{ marginRight: "10px" }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={handleDelete}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DisplayForm;

