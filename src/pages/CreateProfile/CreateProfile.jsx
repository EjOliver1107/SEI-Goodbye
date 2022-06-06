export default function CreateProfile() {
    <form action="../StudentsPage" method="POST">
        <div>
            <label>What's Your Name?</label>
            <input type="text" name="name" placeholder="bogos binted?"></input>
            <label>Is this a Milk Tea?</label>
            <select name="category">
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
            </select>

        </div>
    </form>
}