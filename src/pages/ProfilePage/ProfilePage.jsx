import { user } from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import * as  peopleAPI from '../../utilities/people-api';

export default function ProfilePage({user}) {
    const [profile, setProfile] =  useState({})

    useEffect(() => {
        
        async function getProfileData() {
            const profile = await peopleAPI.getProfile() 
            setProfile(profile) 
        } 
        getProfileData()
    }, [])
    console.log(profile)
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
            </div>
        )
}