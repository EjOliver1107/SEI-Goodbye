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
    <nav>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to ="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to ="/About">About</Link>
      &nbsp; | &nbsp;
      <Link to ="/profile">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/students">Students</Link>
      &nbsp; | &nbsp;
      <Link to="/instructors">Instructors</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}