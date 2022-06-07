// import React, { useState } from 'react';

export default function CreateProfile(handleAddProfile) {
//   const [content, setcontent] = useState(``); 
//   async function handleSubmit(e) {
//        e.preventDefault();
//        handleAddProfile(content)
//    };
    return (
    <div>
        
    <form /*onSubmit={handleSubmit}*/>
        <div>
            <label>What's Your Name?</label>
            <input type="text" name="name" placeholder="bogos binted?"></input>
            <label>What was your role?</label>
            <select name="category">
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
            </select>
            <label>Favorite Scripting/Programming Language?</label>
            <section className="favoriteLanguages">
                <div>
                    <p>HTML</p>
                    <input type="checkbox" name="favoriteLanguages" value="html" />
                </div>
                <div>
                    <p>CSS</p>
                    <input type="checkbox" name="favoriteLanguages" value="css" />
                </div>
                <div>
                    <p>JavaScript</p>
                    <input type="checkbox" name="favoriteLanguages" value="js" />
                </div>
                <div>
                    <p>Python</p>
                    <input type="checkbox" name="favoriteLanguages" value="python" />
                </div>
                <div>
                    <p>JavaScriptXML</p>
                    <input type="checkbox" name="favoriteLanguages" value="jsx" />
                </div>
                <div>
                    <p>Embedded JavaScript (ejs (¬‿¬))</p>
                    <input type="checkbox" name="favoriteLanguages" value="ejs" />
                </div>
            </section>
            <input type="submit" value="Create Profile" />
        </div>
    </form>
    </div>
    );
}