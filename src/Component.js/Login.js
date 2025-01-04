// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import system from './system.jpg';

// function Login() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

//   const validationSchema = Yup.object({
//     Name: Yup.string().required('Username is required'),
//     Password: Yup.string().required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       Name: '',
//       Password: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       const { Name, Password } = values;

//       try {
//         const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/useeffect', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ Name, Password }),
//         });

//         if (!response.ok) {
//           const errorText = await response.text();
//           throw new Error(`Response was not ok: ${errorText}`);
//         }

//         alert('Form Submitted Successfully!');
//         navigate('/Register', { state: { Name, Password } });
//         formik.resetForm();
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('There was an error submitting the form.');
//       }
//     },
//   });

//   return (
//     <div className="ground" style={{ backgroundColor: '', marginTop: '30px', height: '650px', width: '850px', marginLeft: '340px' }}>
//       <div style={{ display: 'flex' }}>
//         <img src={system} alt="System" className="system" />
//         <div className="text">
//           <h1 style={{ color: '#203864', marginLeft: '80px' }}>Login Form</h1>

//           <div style={{ marginBottom: '15px', textAlign: 'left' }}>
//             <label>Name:</label>
//             <input type="text" id="Name" autoComplete="off" value={formik.values.Name} onChange={formik.handleChange} />
//             {formik.touched.Name && formik.errors.Name && (
//               <span style={{ color: 'red' }}>{formik.errors.Name}</span>
//             )}
//           </div>

//           <div style={{ marginBottom: '15px', textAlign: 'left' }}>
//             <label>Password:</label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="Password"
//                 autoComplete="off"
//                 value={formik.values.Password}
//                 onChange={formik.handleChange}
                
//                 style={{
//                   width: '100%',
//                   padding: '10px',
//                   margin: '5px 0',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                 }}
//               />
//               <i
//                 className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
//                 style={{
//                   position: 'absolute',
//                   right: '10px',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => setShowPassword(!showPassword)}
//               />
//             </div>
//             {formik.touched.Password && formik.errors.Password && (
//               <span style={{ color: 'red' }}>{formik.errors.Password}</span>
//             )}
//           </div>

//           <div style={{ marginBottom: '15px', textAlign: 'left' }}>
//             <label style={{ display: 'inline-flex', alignItems: 'center', fontSize: '14px', whiteSpace: 'nowrap' }}>
//               <input
//                 type="checkbox"
//                 style={{ marginRight: '5px', transform: 'scale(1.3)', marginTop: '4px' }}
//               />
//               I agree to the <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}>terms and conditions</a>.
//             </label>
//           </div>

//           <button onClick={formik.handleSubmit}>Submit</button>

//           <p style={{ marginLeft: '60px', display: 'block' }}>
//             Login to the account{' '}
//             <a
//               href="#"
//               id="sign"
//               onClick={() => navigate('/Register')}
//               className="btn"
//             >
//               Sign In
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;






































import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import system from './system.jpg'; 


function Login() {
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validationSchema = Yup.object({
    Name: Yup.string().required('Username is required'),
    Password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      Name: '',
      Password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const { Name, Password } = values;

      try {
        const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/useeffect', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Name, Password }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Response was not ok: ${errorText}`);
        }

        alert('Form Submitted Successfully!');
        navigate('/Register', { state: { Name, Password } });
        formik.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form.');
      }
    },
  });

  return (
    <div className='ground' style={{backgroundColor:'', marginTop:'30px',height:'650px',width:'850px',marginLeft:'340px'}}>
    <div style={{display:'flex'}}> 
      <img src={system} alt="System" className='system'/>
      <div className='text'>
      {/* <i className="fa-solid fa-user-circle" id="server" ></i> */}
        <h1 style={{ color: '#203864',marginLeft:'80px' }}>Login Form</h1>

        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label>Name:</label>
          <input type="text" id="Name" autoComplete="off" value={formik.values.Name} onChange={formik.handleChange} />
          {formik.touched.Name && formik.errors.Name && (
            <span style={{ color: 'red' }}>{formik.errors.Name}</span>
          )}
        </div>

         <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label>Password:</label>
        <div style={{ position: 'relative' }}>
          <input type={showPassword ? 'text' : 'password'} id="Password" autoComplete="off" value={formik.values.Password} onChange={formik.handleChange} />
           <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}  onClick={() => setShowPassword(!showPassword)} id='show' />
        </div>
         {formik.touched.Password && formik.errors.Password && (
        <span style={{ color: 'red' }}>{formik.errors.Password}</span>
       )}
     </div> 

         <div style={{ marginBottom: '15px', textAlign: 'left' }}>
           <label className='check'>
             <input type="checkbox" id='box'/>
                I agree to the  <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}> terms and conditions</a>.
           </label>
         </div>

        <button onClick={formik.handleSubmit}>Submit</button>

        <p style={{ marginLeft: '60px',display:'block' }}> Login to the account{" "}
          <a href="#" id='sign' onClick={() => navigate("/Register")} className="btn">  Sign In </a>
      </p>
    </div>
    </div>
    </div>
  );
}

export default Login;





// import React, { useState }  from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import system from './system.jpg'; 



// function Login() {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     Name: Yup.string().required('Username is required'),
//     Password: Yup.string().required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       Name: '',
//       Password: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/useeffect', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(values),
//         });

//         if (!response.ok) {
//           const errorText = await response.text();
//           throw new Error(`Response was not ok: ${errorText}`);
//         }

//         alert('Form Submitted Successfully!');
//         navigate('/Register', { state: values });
//         formik.resetForm();
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('There was an error submitting the form.');
//       }
//     },
//   });

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="login-image" style={{ backgroundImage: `url(${system})` }}></div>

//         <div className="login-form">
//           <h1 className="login-title">Login Form</h1>
//           <form onSubmit={formik.handleSubmit} className="form">
//             <div className="form-group">
//               <label htmlFor="Name" className="form-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="Name"
//                 name="Name"
//                 value={formik.values.Name}
//                 onChange={formik.handleChange}
//                 className="form-input"
//               />
//               {formik.touched.Name && formik.errors.Name && (
//                 <span className="error-message">{formik.errors.Name}</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="Password" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="Password"
//                 name="Password"
//                 value={formik.values.Password}
//                 onChange={formik.handleChange}
//                 className="form-input"
//               />
//               {formik.touched.Password && formik.errors.Password && (
//                 <span className="error-message">{formik.errors.Password}</span>
//               )}
//             </div>

//             <div className="form-group checkbox-group">
//               <label className="checkbox-label">
//                 <input type="checkbox" className="checkbox-input" />
//                 I agree to the <a href="#" className="terms-link">terms and conditions</a>.
//               </label>
//             </div>

//             <button type="submit" className="submit-button">
//               Login
//             </button>
//           </form>
//           <p className="signup-link">
//             Don't have an account?{' '}
//             <button onClick={() => navigate('/Register')} className="signup-button">
//               Sign Up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;
