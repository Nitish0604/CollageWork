import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-[65px] flex items-center bg-background border-b">
        <Link href="#" className="flex items-center justify-center gap-[.6rem]" prefetch={false}>
          <FaCode className="h-6 w-6 text-primary" />
          <span className="text-[1.6rem] font-bold">CodeBet</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/register"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-6 py-2 text-md font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link>
          <Link
            to='/login'
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-md font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-10"
            prefetch={false}
          >
            Login
          </Link>
        </nav>
      </header>
  )
}

export default Navbar