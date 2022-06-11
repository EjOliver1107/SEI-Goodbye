import { getUser } from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import * as  peopleAPI from '../../utilities/people-api';
export default function ShowProfile({user}) {
    const [profile, setProfile] =  useState({})
  
    // const  { id } = useParams()
    // const person = profiles.find(p => p._id === id)
    useEffect(() => {
        
        async function getProfileData() {
            const profile = await peopleAPI.getProfile() 
            setProfile(profile) 
        } 
        getProfileData()
    }, [])
    console.log(profile)
    // async function updateProfile() {
    //    const updateProfile = await peopleAPI.update(formData, profile._id)
    //    const updated = profiles
    // }
        return (
            <div id='wholeProfile'>
             

                <h1>{user.name}'s Profile</h1>
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
                <button><a href='/sign'>Add Signature!</a></button>
                </div>
                </div>
            </div>
        )
}