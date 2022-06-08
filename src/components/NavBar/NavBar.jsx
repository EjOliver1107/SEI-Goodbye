import './NavBar.css'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
        <li>Welcome, {user.name}</li>
      <Link to ="/"><li>Home</li></Link>
      <Link to ="/About"><li>About</li></Link>
      <Link to ="/profile"><li>Profile</li></Link>
      <Link to="/students"><li>Students</li></Link>
      <Link to="/instructors"><li>Instructors</li></Link>
      <Link to="" onClick={handleLogOut}><li>Log Out</li></Link>
      </ul>
      </div>
    </nav>
  );
}