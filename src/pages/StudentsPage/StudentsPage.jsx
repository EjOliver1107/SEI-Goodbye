export default function StudentsPage({ people }) {
  const students = people.filter(p => p.category === 'student')
  const allStudents = students.map(s => <p key= {s._id}>{s.name}</p>)
  console.log(students)
  return (
    <div>
    <h1>Students</h1>
      {allStudents}
    </div>
  );
}