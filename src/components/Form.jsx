import React from 'react'
import {useState} from 'react'

export default function Form({ addHog }) {
    const [addedHog, setAddedHog] = useState({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      image: "",
      "highest medal achieved": ""
    });
  
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setAddedHog((prevNewHog) => ({
        ...prevNewHog,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    //form submission
    const handleFormSubmit = (e) => {
      e.preventDefault();
      addHog({ ...addedHog, weight: parseFloat(addedHog.weight) }); 

      setAddedHog({
        name: "",
        specialty: "",
        weight: "",
        greased: false,
        image: "",
        "highest medal achieved": ""
      });
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="ui form">
        <h3>Add a New Hog</h3>
  
        <div className="field">
          <label>Hog's Name</label>
          <input
            type="text"
            name="name"
            value={addedHog.name}
            onChange={handleInputChange}
            required
          />
        </div>
  
        <div className="field">
          <label>Hog's Specialty</label>
          <input
            type="text"
            name="specialty"
            value={addedHog.specialty}
            onChange={handleInputChange}
          />
        </div>
  
        <div className="field">
          <label>Hog's Weight</label>
          <input
            type="number"
            name="weight"
            value={addedHog.weight}
            onChange={handleInputChange}
            required
          />
        </div>
  
        <div className="field">
          <label>
            <input
              type="checkbox"
              name="greased"
              checked={addedHog.greased}
              onChange={handleInputChange}
            />
            Greased
          </label>
        </div>
  
        <div className="field">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={addedHog.image}
            onChange={handleInputChange}
          />
        </div>
  
        <div className="field">
          <label>Highest Medal Achieved</label>
          <input
            type="text"
            name="highest medal achieved"
            value={addedHog["highest medal achieved"]}
            onChange={handleInputChange}
          />
        </div>
  
        <button type="submit" className="ui button primary">Submit New Hog</button>
      </form>
    );
  }