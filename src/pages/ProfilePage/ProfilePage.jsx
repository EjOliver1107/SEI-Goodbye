import { getUser } from '../../utilities/users-service';
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
                    <h3>{profile.name}</h3>
                </div>
            </div>
        )
}