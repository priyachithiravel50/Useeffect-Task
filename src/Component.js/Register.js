import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  // useLocation to access passed state
import { useFormik } from 'formik';
import * as Yup from 'yup';
import system from './system.jpg';

function Register() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);


const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/Login");
  };
  const { state } = useLocation();  // Access passed rowData
  const { rowData } = state || {};  // If no data, fallback to empty object

  // Validation schema with Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref('password'), null], "Passwords must match"),
    address: Yup.string().required("Address is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: rowData?.firstName || '',
      lastName: rowData?.lastName || '',
      email: rowData?.email || '',
      number: rowData?.number || '',
      password: rowData?.password || '',
      confirmPassword: rowData?.confirmPassword || '',
      address: rowData?.address || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const { firstName, lastName, email, number, password, address } = values;

      try {
        const method = rowData ? 'PUT' : 'POST';  // If editing, use PUT, else POST
        const url = rowData
          ? `https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login/${rowData.id}`
          : 'https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login';

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstName, lastName, email, number, password, address }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Form data submitted:", data);
        alert("Form Submitted Successfully!");
          // Reset form
          formik.resetForm();

        // Navigate back to display page with form data
        navigate('/displayform');

        
         
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Failed to submit form.");
        }
    },
  });
  
  return (
    <div style={{ 
      backgroundImage: `url(${system})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100%',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px',
        paddingRight:'40px', 
        borderRadius: '10px', 
        marginTop: '66px',
        marginBottom:'10px',
        width: '500px', 
        // height:'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
      }}>
        <h1 style={{ color: '#203864', textAlign: 'center' }}>Register Form</h1>
        <form onSubmit={formik.handleSubmit} style={{marginTop:'20px'}}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <div >
              <label>First Name:</label>
              <input  type='text'id='firstName' placeholder='First Name'  value={formik.values.firstName}  onChange={formik.handleChange} autoComplete='off'
                style={{ width: '100%', padding: '8px', margin: '5px 0' }}
              />
              {formik.touched.firstName && formik.errors.firstName && <p style={{ color: 'red' }}>{formik.errors.firstName}</p>}
            </div>

            <div >
              <label>Last Name:</label>
              <input  type='text'  id='lastName' placeholder='Last Name'  value={formik.values.lastName}  onChange={formik.handleChange} autoComplete='off'
                style={{ width: '100%', padding: '8px', margin: '5px 0' }}
              />
              {formik.touched.lastName && formik.errors.lastName && <p style={{ color: 'red' }}>{formik.errors.lastName}</p>}
            </div>
          </div>

          <label>Email:</label>
          <input  type='text'  id='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} autoComplete='off'
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {formik.touched.email && formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}

          <label>Phone no:</label>
          <input type='number' id='number' placeholder='Phone no' value={formik.values.number} onChange={formik.handleChange} autoComplete='off'
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {formik.touched.number && formik.errors.number && <p style={{ color: 'red' }}>{formik.errors.number}</p>}

          <label>Password:</label>
            <div style={{ position: 'relative' }}>
              <input  type={passwordVisible ? 'text' : 'password'} id='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} autoComplete='off'
                style={{ width: '100%', padding: '8px', margin: '5px 0' }}
               />
              <i  className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}   onClick={togglePasswordVisibility} 
                style={{ 
                  position: 'absolute', 
                  right: '10px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  cursor: 'pointer',
                  color: '#203864' 
                }}
              />
            </div>
            {formik.touched.password && formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}

            <label>Confirm Password:</label>
            <div style={{ position: 'relative' }}>
              <input type={confirmPasswordVisible ? 'text' : 'password'} id='confirmPassword' placeholder='Confirm Password' value={formik.values.confirmPassword} onChange={formik.handleChange} autoComplete='off'
                style={{ width: '100%', padding: '8px', margin: '5px 0' }}
              />
              <i   className={`fa ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}   onClick={toggleConfirmPasswordVisibility} 
                style={{ 
                  position: 'absolute', 
                  right: '10px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  cursor: 'pointer',
                  color: '#203864' 
                }}
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>}

          {/* <label>Password:</label>
          <input  type='password'  id='password'  value={formik.values.password}  onChange={formik.handleChange}  autoComplete='off'
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}/>
          {formik.touched.password && formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}

          <label>Confirm Password:</label>
          <input  type='password'  id='confirmPassword'  value={formik.values.confirmPassword}  onChange={formik.handleChange} autoComplete='off'
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>} */}

          <label>Address:</label>
          <input type='text' id='address' placeholder='Address' value={formik.values.address} onChange={formik.handleChange} autoComplete='off'
           style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {formik.touched.address && formik.errors.address && <p style={{ color: 'red' }}>{formik.errors.address}</p>}

          {/* <button type="submit" id='button' style={{ width: '100%', padding: '10px', backgroundColor: '#203864', color: 'white', border: 'none', marginTop: '10px' }}>Submit</button> */}
       
         <div style={{ marginBottom: '15px', textAlign: 'left' }}>
           <label className='check'>
             <input type="checkbox" id='box'/>
                I agree to the  <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}> terms and conditions</a>.
           </label>
         </div>
         
          <button type="submit" id='button' style={{ width: '100%', padding: '10px', backgroundColor: '#203864', color: 'white', border: 'none', marginTop: '10px' }}>
          {rowData ? 'Update' : 'Submit'}
        </button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Login to the account! <a href="#" id='sign' onClick={goToLogin} className="btn btn-danger d-block"> Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;




