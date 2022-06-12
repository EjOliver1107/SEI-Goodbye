import { Link } from 'react-router-dom';
export default function InstructorsPage({people}) {
  const instructors = people.filter(p => p.category === 'instructor')
  const allInstructors = instructors.map(e => <p key= {e._id}>{e.name}</p>)
  console.log(instructors)

  return (
    <>
      <h1>Instructors</h1>
      {instructors.map(e => <Link to = {`/profile/${e._id}`}>{e.name}</Link> )}
    </>
  );
}