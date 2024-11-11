
'use client'
import React from 'react';
import { Card } from './ui/card';
import { login } from '@/app/api/user/route';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
const LoginForm = () => {
    const router = useRouter();
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const username = formData.get('username') as string;
                const password = formData.get('password') as string;
        // alert(`Username: ${username}, Password: ${password}`);
        const data = await login(username, password);
        if (data.success) {
            router.push(`/user_profile/${username}`);
        } else {
            alert(data.success)
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <Card>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <Input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Input type="password" id="password" name="password" required />
                    </div>
                    <Button type="submit">Login</Button>
                </Card>
            </form>
        </div>
    );
};

export default LoginForm;
