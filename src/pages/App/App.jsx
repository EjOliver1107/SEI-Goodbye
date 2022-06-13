import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import './App.css';
import StudentsPage from '../StudentsPage/StudentsPage';
import InstructorsPage from '../InstructorsPage/InstructorsPage';
import AboutPage from '../AboutPage/AboutPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import CreateProfile from '../../components/CreateProfile/CreateProfile';
import * as peopleAPI from '../../utilities/people-api';
import SignatureForm from '../../components/SignatureForm/SignatureForm';
import ShowProfile from '../ShowProfile/ShowProfile';

function App() {
  const [user, setUser] = useState(getUser());
  const [profiles, setProfiles] = useState({})
  const [people, setPeople] = useState([])
  const [profile, setProfile] =  useState({})

   useEffect(() => { 
     async function getAllPeople() {
       const allPeople = await peopleAPI.getAll()
       setPeople(allPeople)
     }
     getAllPeople()
   }, [])
   console.log('people' , people)
  
   async function getProfileData(id) {
    const profile = await peopleAPI.getProfile(id) 
    setProfile(profile) 
} 
// getProfileData()

  return (
    <div>
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/students" element={<StudentsPage people={people} getProfileData={getProfileData} />} />
            <Route path="/instructors" element={<InstructorsPage people={people} getProfileData={getProfileData} />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/create" element={<CreateProfile setProfiles={setProfiles} />} />
            <Route path="/:id/sign" element={<SignatureForm profile={profile} />} />
            <Route path="/profile/:id" element={<ShowProfile user={user} profile={profile}  />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
        
      }
    </main>
</div>
  );
}
export default App;
