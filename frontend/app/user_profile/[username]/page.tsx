'use client'

import { useParams } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import { useEffect, useState } from 'react'
import { get_user_profile_details } from '@/app/api/user/route'
import { SERVER_URL } from '@/app/constants/constanst'
interface User {
    username: string;
    profile_image: string;
    follower_count: number;
    following_count: number;
    bio: string;
}
const UserPage = () => {
    const { username } = useParams()
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
       const fetch_user_profile_details = async () => {
         try {
            const response = await get_user_profile_details(username)
             console.log(response)
             setUser(response)
         } catch (error) {
            console.log(error)
         }
        }
        fetch_user_profile_details()
     }, [username])



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
      <Card className="col-span-1">
        <CardHeader className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={`${SERVER_URL}${user?.profile_image}`} alt={`${user?.username}'s profile picture`} />
            <AvatarFallback>{(user?.username as string)?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">{user?.username}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              <span className="font-semibold text-foreground">{user?.follower_count}</span> followers
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              <span className="font-semibold text-foreground">{user?.following_count}</span> following
            </div>
          </div>
          <Button variant="outline" className="w-full">Edit Profile</Button>
          <p className="text-center text-sm">{user?.bio}</p>
        </CardContent>
      </Card>
      <div className="col-span-1">
        {/* Diri ang post sa user hehe */}
      </div>
    </div>
  )
}

export default UserPage
