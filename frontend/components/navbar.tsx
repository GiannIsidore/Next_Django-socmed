'use client'

import { useState, useEffect } from 'react'
import { Bell, Home, Menu, MessageCircle, Search, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img className="h-8 w-8" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWdybzk2aGZlMDUzcWh1OXcwaXV6MDlqcTh0aHhxcTk2YW1paDJjaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EZICHGrSD5QEFCxMiC/giphy.gif" alt="Logo" />
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link href="/face_libro" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                  <Home className="inline-block mr-1" size={18} />
                  Home
                </Link>
                <a href="face_libro/message/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                  <MessageCircle className="inline-block mr-1" size={18} />
                  Messages
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pr-8"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <Button variant="ghost" size="icon" className="ml-3">
                <Bell size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="ml-3">
                <Link href="face_libro/user_profile/giann">
                    <User size={18} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              <Home className="inline-block mr-2" size={18} />
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              <MessageCircle className="inline-block mr-2" size={18} />
              Messages
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="/placeholder.svg?height=40&width=40" alt="User avatar" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-gray-800">John Doe</div>
                <div className="text-sm font-medium leading-none text-gray-500">john@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full mb-2"
              />
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2" size={18} />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2" size={18} />
                Profile
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
