import { useState } from 'react';
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

function App() {
  const [user, setUser] = useState(getUser());
  const [profiles, setProfiles] = useState([])
  return (
    <div>
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create" element={<CreateProfile setProfiles={setProfiles} />} />
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
