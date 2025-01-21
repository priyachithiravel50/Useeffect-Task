import React, { useState } from 'react'

function State() {
  const[State,setState] = useState('')

  const handlestatechange = (e) =>{
    setState(e.target.value);
};
  return (
    <div>
         <label>State:</label>
        <select id='state' value={State} onChange={handlestatechange}>
          <option value="" disabled>Select State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Gujarat">Gujarat</option>
        </select>
      
    </div>
  )
}

export default State
