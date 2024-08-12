import React, { useState, useCallback } from 'react'

function HookCounterObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    const handleFirstNameChange = useCallback((e: { target: { value: any; }; }) => {
        setName({ ...name, firstName: e.target.value });
    }, [name]);

    const handleLastNameChange = useCallback((e: { target: { value: any; }; }) => {
        setName({ ...name, lastName: e.target.value });
    }, [name]);

    return (
    <div className="h2form">
      <form>
        <h2> ""</h2>
        <input 
          placeholder="Enter your first name!"
          id="ObjectInput1"
          type="text" 
          value={name.firstName} 
          onChange={handleFirstNameChange}
        />
        <h2>Your first name is: {name.firstName}</h2>

        <input 
          placeholder="Enter your last name!"
          id="ObjectInput2"
          type="text"
          value={name.lastName} 
          onChange={handleLastNameChange}
        />
        <h2> Your last name is: {name.lastName}</h2>
      </form>
    </div>
  )
}

export default HookCounterObject
