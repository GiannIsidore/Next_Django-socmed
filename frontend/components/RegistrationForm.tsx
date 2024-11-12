'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { register } from '@/app/api/user/route'
import Link from 'next/link'

const RegistrationForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const userData = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      first_name: formData.get('first_name') as string,
      last_name: formData.get('last_name') as string,
      password: password,
    }

    try {
      const data = await register(userData)
      if (data) {
          router.push(`/`)
          alert('ok')
      } else {
        setError(data.message || 'Registration failed. Please try again.')
      }
    } catch (err) {
      setError('An error occurred during registration. Please try again.')
    }
  }

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword)
    } else {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
      </CardHeader>
      <form onSubmit={handleRegister}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input type="text" id="first_name" name="first_name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input type="text" id="last_name" name="last_name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => togglePasswordVisibility('password')}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm_password"
                name="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
        </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                    <div className="text-center text-sm">
                      <Button type="submit" className="w-full">Register</Button>
                        Already have an account?{' '}
            <Link href="/" className="text-blue-600 hover:underline">
              Login here
            </Link>
                       </div>
              </CardFooter>


      </form>
    </Card>
  )
}

export default RegistrationForm
