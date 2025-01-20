import React from 'react'

function city() {
  return (
    <div>
        <label>Country:</label>
        <select id='country' value={form.country} onChange={handleChange}>
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
