import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as peopleAPI from '../../utilities/people-api'
import './CreateProfile.css'


export default function CreateProfile({ setProfile }){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      category: 'student',
      image: ''
      

  }); 
  function handleChange(evt) {
    setFormData({...formData, [evt.target.name] : evt.target.value})
}
  async function handleSubmit(evt) {
       evt.preventDefault();
       const profile = await peopleAPI.createProfile(formData)
       //    const student = await peopleAPI.handleAddStudentProfile(content)   
    //     setNewProfile(" ");
        navigate('/students', {replace: true});
    };
    return (
    <div id='profileForm'>
        
    <form onSubmit={handleSubmit}>
        <div>
            <label>What's Your Name?</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="bogos binted?"></input>
            <label >How Old Are You?</label>
            <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="21"></input>
            <label>What was your role?</label>
            <select name="category" onChange={handleChange} value={formData.category}>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
            </select>
            {/* /* <label>Favorite Scripting/Programming Language?</label>
            <section className="favoriteLanguages">
                <div>
                    <p>HTML</p>
                    <input type="checkbox" name="favoriteLanguages" onChange={handleChange} value="html" />
                </div>
                <div>
                    <p>CSS</p>
                    <input type="checkbox" name="favoriteLanguages" onChange={handleChange} value="css" />
                </div>
                <div>
                    <p>JavaScript</p>
                    <input type="checkbox" name="favoriteLanguages" onChange={handleChange} value="js" />
                </div>
                <div>
                    <p>Python</p>
                    <input type="checkbox" name="favoriteLanguages" onChange={handleChange} value="python" />
                </div>
                <div>
                    <p>JavaScriptXML</p>
                    <input type="checkbox" name="favoriteLanguages" onChange={handleChange} value="jsx" />
                </div>
                <div>
                    <p>Embedded JavaScript (ejs (¬‿¬))</p>
                    <input type="checkbox" name="favoriteLanguages" onChange={handleChange} value="ejs" />
                </div>
            </section>  */}
            <br />
            <input type="submit" value="Create Profile"  />
        </div>
    </form>
    </div>
    );
}