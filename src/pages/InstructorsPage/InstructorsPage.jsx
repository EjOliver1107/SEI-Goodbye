import '../StudentsPage/DisplayPage.css';
import { Link } from 'react-router-dom';
export default function InstructorsPage({people, getProfileData}) {
  const instructors = people.filter(p => p.category === 'instructor')
  const allInstructors = instructors.map(e => <p key= {e._id}>{e.name}</p>)
  console.log(instructors)

  return (
    <>
    <div id='list-stuff' className="box animate fadeInUp one">
    <h1>Instructors</h1>
    {/* <Link to = {`/profile/${people._id}`}> */}
      {instructors.map(e => <Link to={`/profile/${e._id}`}><button onClick={() => getProfileData(e._id)}>{e.name}</button><br></br></Link>)}
      {/* // </Link> */}
    </div>
    </>
  );
}