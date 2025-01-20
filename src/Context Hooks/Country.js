import React from 'react'

function Country() {
  return (
    <div>
          <label>Country:</label>
        <select id='country'>
          <option value="" disabled>Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="London">London</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Singapore">Singapore</option>
        </select>
        {/* {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>} */}
      
    </div>
  )
}

export default Country
