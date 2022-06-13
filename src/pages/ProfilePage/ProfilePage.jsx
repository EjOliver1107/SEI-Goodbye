import { getUser } from '../../utilities/users-service';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as  peopleAPI from '../../utilities/people-api';
export default function ShowProfile({user, profile}) {
    const navigate = useNavigate();

    // const [profile, setProfile] =  useState({})
  async function deleteProfile(id) {
    const removed = await peopleAPI.deleteProfile(id);
    navigate('/students');
    // const updateProfiles = profile.filter(id)
  }
    // const  { id } = useParams()
    // const person = profiles.find(p => p._id === id)
    // useEffect(() => {
        
    // }, [])
    console.log(profile, 'This b**** empty')
    // async function updateProfile() {
    //    const updateProfile = await peopleAPI.update(formData, profile._id)
    //    const updated = profiles
    // }
        return (
            <div id='wholeProfile'>
             

                <h1>{profile && profile.name}'s Profile</h1>
                <div id='profilePhoto'>Photo goes here</div>
                <div className='profile'>
                <div id='info'>
                    <h2>Name</h2>
                    <h3>{profile.name}</h3>
                    <h2>Age</h2>
                    <h3>{profile.age}</h3>
                    <h2>Course title:</h2>
                    <h3>{profile.category}</h3>


                </div>
                <div id='siginfo'>
                <h2>Signatures</h2>
                <button><a href={`/${profile._id}/sign`}> Add Signature!</a></button>
                </div>
                <div id='delBtn'>
                    <button onClick={() => deleteProfile(profile._id)} >Delete Profile</button>
                </div>
                </div>
            </div>
        )
}