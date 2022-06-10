export default function InstructorsPage({people}) {
  const instructors = people.filter(p => p.category === 'instructor')
  const allInstructors = instructors.map(i => <p key= {i._id}>{i.name}</p>)
  console.log(instructors)
  return (
    <>
      <h1>Instructors</h1>
      {allInstructors}
    </>
  );
}