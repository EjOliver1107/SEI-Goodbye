import { useState } from 'react';
import * as peopleAPI from '../../utilities/people-api';
import { Link } from 'react-router-dom';

export default function StudentsPage({ people }) {
  const students = people.filter(p => p.category === 'student')
  const allStudents = students.map(s => <p key= {s._id}>{s.name}</p>)
  console.log(students, 'Joji made me cry')
  return (
    <div>
    <h1>Students</h1>
    {/* <Link to = {`/profile/${people._id}`}> */}
      {students.map(i => <Link to = {`/profile/${i._id}`}>{i.name}</Link>)}
      {/* // </Link> */}
    </div>
  );
}