import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import './App.css';
import StudentsPage from '../StudentsPage/StudentsPage';
import InstructorsPage from '../InstructorsPage/InstructorsPage';

function App() {
  const [user, setUser] = useState(getUser());

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
