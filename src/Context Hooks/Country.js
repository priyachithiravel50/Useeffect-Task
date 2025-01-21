import React,{useState} from 'react'

function Country() {
  const[Country,setCountry] = useState('')

  const handleCountrychange = (e) =>{
    setCountry(e.target.value);
};
  return (
    <div>
          <label>Country:</label>
        <select id='country' value={Country} onChange={handleCountrychange} >
          <option value="" disabled>Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="London">London</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Singapore">Singapore</option>
        </select>      
    </div>
  )
}

export default Country
