// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();
//      const goToLogin = () => {
//         navigate("/useeffect");
//       };
    

//   // State for form data
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     number: '',
//     password: '',
//     confirmPassword: '',
//     address: '',
//     state: '',
//     country: '',
//   });

//   // State for error messages
//   const [errors, setErrors] = useState({});


//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setForm((prev) => ({ ...prev, [id]: value }));

//     // Clear the error for the current field
//     setErrors((prev) => ({ ...prev, [id]: '' }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, number, password, confirmPassword, address, state, country } = form;

//     // Validation
//     const newErrors = {};
//     if (!name) newErrors.name = "Name is required";
//     if (!email) newErrors.email = "Email is required";
//     if (!number) newErrors.number = "Phone number is required";
//     if (!password) newErrors.password = "Password is required";
//     if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
//     if (password && confirmPassword && password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }
//     if (!address) newErrors.address = "Address is required";
//     if (!state) newErrors.state = "State is required";
//     if (!country) newErrors.country = "Country is required";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, number, password, address, state, country }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Form data submitted:", data);
//       alert("Form Submitted Successfully!");

//       // Navigate to the display page with form data
//       navigate('/displayform', { state: { formData: data } });

//       // Reset form
//       setForm({
//         name: '',
//         email: '',
//         number: '',
//         password: '',
//         confirmPassword: '',
//         address: '',
//         state: '',
//         country: '',
//       });
//       setErrors({});
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form.");
//     }
//   };

//   return (
//     <div className='text1'>
//       <h1 style={{ marginLeft: '70px', color: '#203864', display: 'block', marginTop: '10px' }}>Register Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type='text' id='name' value={form.name} onChange={handleChange} autoComplete='off' />
//         {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

//         <label>Email:</label>
//         <input type='text' id='email' value={form.email} onChange={handleChange} autoComplete='off' />
//         {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

//         <label>Phone no:</label>
//         <input type='number' id='number' value={form.number} onChange={handleChange} autoComplete='off' />
//         {errors.number && <p style={{ color: 'red' }}>{errors.number}</p>}

//         <label>Password:</label>
//         <input type='password' id='password' value={form.password} onChange={handleChange} autoComplete='off' />
//         {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

//         <label>Confirm Password:</label>
//         <input type='password' id='confirmPassword' value={form.confirmPassword} onChange={handleChange} autoComplete='off' />
//         {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

//         <label>Address:</label>
//         <input type='text' id='address' value={form.address} onChange={handleChange} autoComplete='off' />
//         {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

//         <label>State:</label>
//         <select id='state' value={form.state} onChange={handleChange}>
//           <option value="" disabled>Select State</option>
//           <option value="Tamil Nadu">Tamil Nadu</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Karnataka">Karnataka</option>
//           <option value="Andhra Pradesh">Andhra Pradesh</option>
//           <option value="Gujarat">Gujarat</option>
//         </select>
//         {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}

//         <label>Country:</label>
//         <select id='country' value={form.country} onChange={handleChange}>
//           <option value="" disabled>Select Country</option>
//           <option value="India">India</option>
//           <option value="Australia">Australia</option>
//           <option value="London">London</option>
//           <option value="Afghanistan">Afghanistan</option>
//           <option value="Singapore">Singapore</option>
//         </select>
//         {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}

//         <button type="submit" id='button'>Submit</button>

//         <p style={{marginLeft:'120px'}}>Login to the account! <a href="#" id='sign' onClick={goToLogin} className="btn btn-danger d-block"> Sign In</a></p>
//       </form>
//     </div>
//   );
// }

// export default Register;




import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import system from './system.jpg'; 

function Register() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/Login");
  };

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
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
      address: '',

    },
    validationSchema,
    onSubmit: async (values) => {
      const { firstName, lastName, email, number, password, address } = values;

      try {
        const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login', {
          method: 'POST',
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

        // Navigate to the display page with form data
        navigate('/displayform', { state: { formData: data } });

        // Reset form
        formik.resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form.");
      }
    },
  });

  return (
    <div style={{backgroundColor:'', height:'100vh'}}>
    <div style={{display:'flex',marginLeft:'1px'}} className='reg'> 
      <img src={system} alt="System" className='sys'/>
    <div className='text1'>
      <h1 style={{ marginLeft: '70px', color: '#203864', display: 'block', marginTop: '10px' }}>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ flex: 1 }}>
            <label>First Name:</label>
            <input
              type='text'
              id='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete='off'
            />
            {formik.touched.firstName && formik.errors.firstName && <p style={{ color: 'red' }}>{formik.errors.firstName}</p>}
          </div>

          <div style={{ flex: 1 }}>
            <label>Last Name:</label>
            <input
              type='text'
              id='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete='off'
            />
            {formik.touched.lastName && formik.errors.lastName && <p style={{ color: 'red' }}>{formik.errors.lastName}</p>}
          </div>
        </div>

        <label>Email:</label>
        <input
          type='text'
          id='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}

        <label>Phone no:</label>
        <input
          type='number'
          id='number'
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='off'
        />
        {formik.touched.number && formik.errors.number && <p style={{ color: 'red' }}>{formik.errors.number}</p>}

        <label>Password:</label>
        <input
          type='password'
          id='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='off'
        />
        {formik.touched.password && formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}

        <label>Confirm Password:</label>
        <input
          type='password'
          id='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='off'
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>}

        {/* <label>Address:</label>
        <input
          type='text'
          id='address'
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='off'
        />
        {formik.touched.address && formik.errors.address && <p style={{ color: 'red' }}>{formik.errors.address}</p>}

        <label>State:</label>
        <select
          id='state'
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled>Select State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Gujarat">Gujarat</option>
        </select>
        {formik.touched.state && formik.errors.state && <p style={{ color: 'red' }}>{formik.errors.state}</p>}

        <label>Country:</label>
        <select
          id='country'
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled>Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="London">London</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Singapore">Singapore</option>
        </select>
        {formik.touched.country && formik.errors.country && <p style={{ color: 'red' }}>{formik.errors.country}</p>} */}

        <button type="submit" id='button'>Submit</button>

        <p style={{ marginLeft: '100px' }}>Login to the account! <a href="#" id='sign' onClick={goToLogin} className="btn btn-danger d-block"> Sign In</a></p>
      </form>
    </div>
     </div>
     </div>
  );
}

export default Register;





// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// function Register() {
//   const navigate = useNavigate();
//   const goToLogin = () => {
//     navigate("/useeffect");
//   };

//   // Validation schema with Yup
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     number: Yup.string().required("Phone number is required"),
//     password: Yup.string().required("Password is required"),
//     confirmPassword: Yup.string()
//       .required("Confirm Password is required")
//       .oneOf([Yup.ref('password'), null], "Passwords must match"),
//     address: Yup.string().required("Address is required"),
//     state: Yup.string().required("State is required"),
//     country: Yup.string().required("Country is required"),
//   });

//   // Formik setup
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       number: '',
//       password: '',
//       confirmPassword: '',
//       address: '',
//       state: '',
//       country: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       const { name, email, number, password, address, state, country } = values;

//       try {
//         const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name, email, number, password, address, state, country }),
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Form data submitted:", data);
//         alert("Form Submitted Successfully!");

//         // Navigate to the display page with form data
//         navigate('/displayform', { state: { formData: data } });

//         // Reset form
//         formik.resetForm();
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         alert("Failed to submit form.");
//       }
//     },
//   });

//   return (
//     <div className='text1'>
//       <h1 style={{ marginLeft: '70px', color: '#203864', display: 'block', marginTop: '10px' }}>Register Form</h1>
//       <form onSubmit={formik.handleSubmit}>
//         <label>Name:</label>
//         <input
//           type='text'
//           id='name'
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           autoComplete='off'
//         />
//         {formik.touched.name && formik.errors.name && <p style={{ color: 'red' }}>{formik.errors.name}</p>}

//         <label>Email:</label>
//         <input
//           type='text'
//           id='email'
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           autoComplete='off'
//         />
//         {formik.touched.email && formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}

//         <label>Phone no:</label>
//         <input
//           type='number'
//           id='number'
//           value={formik.values.number}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           autoComplete='off'
//         />
//         {formik.touched.number && formik.errors.number && <p style={{ color: 'red' }}>{formik.errors.number}</p>}

//         <label>Password:</label>
//         <input
//           type='password'
//           id='password'
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           autoComplete='off'
//         />
//         {formik.touched.password && formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}

//         <label>Confirm Password:</label>
//         <input
//           type='password'
//           id='confirmPassword'
//           value={formik.values.confirmPassword}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           autoComplete='off'
//         />
//         {formik.touched.confirmPassword && formik.errors.confirmPassword && <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>}

//         <label>Address:</label>
//         <input
//           type='text'
//           id='address'
//           value={formik.values.address}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           autoComplete='off'
//         />
//         {formik.touched.address && formik.errors.address && <p style={{ color: 'red' }}>{formik.errors.address}</p>}

//         <label>State:</label>
//         <select
//           id='state'
//           value={formik.values.state}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         >
//           <option value="" disabled>Select State</option>
//           <option value="Tamil Nadu">Tamil Nadu</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Karnataka">Karnataka</option>
//           <option value="Andhra Pradesh">Andhra Pradesh</option>
//           <option value="Gujarat">Gujarat</option>
//         </select>
//         {formik.touched.state && formik.errors.state && <p style={{ color: 'red' }}>{formik.errors.state}</p>}

//         <label>Country:</label>
//         <select
//           id='country'
//           value={formik.values.country}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         >
//           <option value="" disabled>Select Country</option>
//           <option value="India">India</option>
//           <option value="Australia">Australia</option>
//           <option value="London">London</option>
//           <option value="Afghanistan">Afghanistan</option>
//           <option value="Singapore">Singapore</option>
//         </select>
//         {formik.touched.country && formik.errors.country && <p style={{ color: 'red' }}>{formik.errors.country}</p>}

//         <button type="submit" id='button'>Submit</button>

//         <p style={{ marginLeft: '120px' }}>Login to the account! <a href="#" id='sign' onClick={goToLogin} className="btn btn-danger d-block"> Sign In</a></p>
//       </form>
//     </div>
//   );
// }

// export default Register;
