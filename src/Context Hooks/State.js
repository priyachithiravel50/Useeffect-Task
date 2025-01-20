import React from 'react'

function State() {
  return (
    <div>
         <label>State:</label>
        <select id='state'>
          <option value="" disabled>Select State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Gujarat">Gujarat</option>
        </select>
        {/* {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>} */}
      
    </div>
  )
}

export default State
