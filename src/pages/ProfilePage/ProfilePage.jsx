import { user } from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import * as  peopleAPI from '../../utilities/people-api';
import * as SigAPI from '../../utilities/signature-api';


export default function ProfilePage({user}) {
    const [profile, setProfile] =  useState({})
    const [signature, setSignature] = useState([])
    const [formData, setFormData] = useState({
        content: '',
        
  
    }); 
  
   
    async function handleChange(evt) {
        setFormData({...formData, [evt.target.name] : evt.target.value})
    }
      async function handleSubmit(evt) {
           evt.preventDefault();
           const signature = await SigAPI.createSignature(formData)
      }
    useEffect(() => {
        
        async function getSignatureData() {
            const signature = await SigAPI.getSignature() 
            setProfile(profile) 
        } 
        getSignatureData()
    }, [])
    console.log(signature)
        return (
            <div >
                <h1>{user.name}'s Profile</h1>
                <div id='info'>
                    <div>Photo goes here</div>
                    <h2>Name</h2>
                    <h3>{profile.name}</h3>
                    <h2>Age</h2>
                    <h3>{profile.age}</h3>
                    <h2>Course title:</h2>
                    <h3>{profile.category}</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Leave a signature!</label>
                        <input type="text" name="content" onChange={ handleChange } />
                        <input type="submit" value="Create Signature"  />

                    </div>
                </form>
            </div>
        );
}