'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import Link from 'next/link'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { useAuth } from '@/app/context/useAuth'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const { auth_login } = useAuth()

  const handleLogin = async (username: string, password: string) => {
    setError(null)
    auth_login(username, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent">
      <Card className="w-full max-w-md mx-auto overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-75" />
        <CardHeader className="relative z-10 pt-10">
          <CardTitle className="text-3xl font-extrabold text-center text-primary-foreground mb-2">Welcome Back</CardTitle>
          <CardDescription className="text-center text-primary-foreground text-opacity-80">Login to your account</CardDescription>
        </CardHeader>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(username, password); }}>
          <CardContent className="relative z-10 space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-primary-foreground">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                required
                className="bg-background bg-opacity-20 text-primary-foreground placeholder-primary-foreground placeholder-opacity-70 border-primary-foreground border-opacity-30 focus:border-opacity-70 transition-all duration-300"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-primary-foreground">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  className="bg-background bg-opacity-20 text-primary-foreground placeholder-primary-foreground placeholder-opacity-70 border-primary-foreground border-opacity-30 focus:border-opacity-70 transition-all duration-300 pr-10"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 text-primary-foreground hover:text-opacity-70 transition-colors duration-300"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            {error && <p className="text-destructive text-sm font-medium" role="alert">{error}</p>}
          </CardContent>
          <CardFooter className="relative z-10 flex flex-col space-y-4 pb-10 px-6">
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-opacity-90 transition-all duration-300">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
            <div className="text-center text-primary-foreground text-opacity-80 text-sm">
              Don't have an account?{' '}
              <Link href="/register" className="text-primary-foreground hover:underline transition-all duration-300">
                Register here
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default LoginForm
