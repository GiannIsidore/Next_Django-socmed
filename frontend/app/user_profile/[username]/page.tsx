'use client'
import { useParams } from 'next/navigation';

const UserPage = () => {
    const { username } = useParams();

    return (
        <div>
            <h1 >Welcome, {username}!</h1>
        </div>
    );
};

export default UserPage;
