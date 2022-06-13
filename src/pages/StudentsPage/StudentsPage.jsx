import { useState, useEffect } from 'react';
import * as peopleAPI from '../../utilities/people-api';
import { Link } from 'react-router-dom';


export default function StudentsPage({ people, getProfileData }) {
  // const allStudents = students.map(s => <p key={s._id}>{s.name}</p>)

    const students = people.filter(p => p.category === 'student')
 
      // window.location.reload(false);

  return (
    <div>
    <h1>Students</h1>
    {/* <Link to = {`/profile/${people._id}`}> */}
      {students.map(i => <Link to={`/profile/${i._id}`}><button onClick={() => getProfileData(i._id)}>{i.name}</button><br></br></Link>)}
      {/* // </Link> */}
    </div>
  );
}