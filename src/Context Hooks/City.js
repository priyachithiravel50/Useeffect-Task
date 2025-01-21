import React,{useState} from 'react'

function city() {
    const[City,setCity] = useState('')

    
  const handlecitychange = (e) =>{
    setCity(e.target.value);
};
  return (
    <div>
      <label>City:</label>
        <select id='city'  value={City} onChange={handlecitychange}>
          <option value="" disabled>Select Country</option>
          <option value="Thanjavur">Thanjavur</option>
          <option value="Thiruvarur">Thiruvarur</option>
          <option value="Nagapattinam">Nagapattinam</option>
          <option value="Dindugal">Dindugal</option>
          <option value="Madurai">Madurai</option>
        </select>
    </div>
  )
}

export default city
