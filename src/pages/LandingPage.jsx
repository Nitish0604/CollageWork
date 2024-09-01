/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jsbxcEgfXeb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {  Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary/80">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="space-y-4 flex flex-col items-center justify-center gap-[1.5rem]">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl lg:text-6xl">
                Elevate Your Coding Skills with CodeBet
              </h1>
              <p className="max-w-[60%] text-primary-foreground/80 md:text-xl text-center">
                CodeBet is a revolutionary platform that combines coding challenges, community, and competitive gameplay
                to help you become a better developer.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-md font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-md text-white font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-15 bg-background">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How it Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unleash Your Coding Prowess with CodeBet
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "CodeBet offers a secure platform for developers to earn rewards, showcase skills, and engage in fair, blockchain-powered coding challenges."
                </p>
              </div>
          </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
            <FaCode className="size-8 text-primary" />
            <h3 className="text-xl font-bold">Coding Challenges</h3>
            <p className="text-muted-foreground">
                Sharpen your skills with a vast library of coding challenges across various domains and difficulty
                levels.
            </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
            <UsersIcon className="size-8 text-primary" />
            <h3 className="text-xl font-bold">Competitive Community</h3>
            <p className="text-muted-foreground">
                Join a thriving community of developers and compete in tournaments to showcase your coding prowess.
            </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
            <TrophyIcon className="size-8 text-primary" />
            <h3 className="text-xl font-bold">Gamified Learning</h3>
            <p className="text-muted-foreground">
                Enjoy a gamified learning experience with leaderboards, achievements, and rewards to keep you
                motivated.
            </p>
            </div>
        </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center gap-4">
            
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Brains Behind CodeBet</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced developers, blockchain experts, and product managers are dedicated to building
                  the future of decentralized coding challenges.
                </p>
              </div>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
              <FcBusinessman className="size-[100px] text-primary" />
                <div className="space-y-2">
                  <p className="text-lg font-medium">Nitish Kumar sah</p>
                  <p className="text-muted-foreground">Software Engineer</p>
                  <p className="text-muted-foreground">
                    "CodeBet has been a game-changer for my coding skills. The challenges and community have pushed me
                    to become a better developer."
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
              <FcBusinessman className="size-[100px] text-primary" />
                <div className="space-y-2">
                  <p className="text-lg font-medium">Ashutosh Kumar</p>
                  <p className="text-muted-foreground">Senior Developer</p>
                  <p className="text-muted-foreground">
                    "I've been using CodeBet for years, and it's been an invaluable tool for improving my coding skills
                    and staying motivated."
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
              <FcBusinessman className="size-[100px] text-primary" />
                <div className="space-y-2">
                  <p className="text-lg font-medium">Amant Kumar</p>
                  <p className="text-muted-foreground">Tech Lead</p>
                  <p className="text-muted-foreground">
                    "CodeBet has been an invaluable resource for my team. The platform helps us stay sharp and
                    competitive in the industry."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unlock Your Coding Potential with CodeBet
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Join a community of developers, challenge yourself with engaging coding problems, and take your skills
                to new heights.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 CodeBet. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}




function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}