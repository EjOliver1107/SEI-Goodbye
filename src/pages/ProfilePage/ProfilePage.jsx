import { getUser } from '../../utilities/users-service';
import { useState } from 'react';

export default function ProfilePage() {
    const [user, setUser] = useState(getUser());
        return (
            <div user={user} setUser={setUser}>

                <h1>{user.name}'s Profile</h1>
            </div>
        )
}