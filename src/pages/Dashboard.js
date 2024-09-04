import React from 'react'
import { FaBell, FaPlus, FaWallet, FaUsers, FaBook, FaDumbbell } from 'react-icons/fa'

export default function Dashboard() {
  // Mock data for demonstration
  const groups = [
    { id: 1, name: "Morning Workout", members: 5, activeChallenge: "30-Day Fitness", icon: <FaDumbbell /> },
    { id: 2, name: "Book Club", members: 8, activeChallenge: "Read 4 Books in a Month", icon: <FaBook /> },
    { id: 1, name: "Morning Workout", members: 5, activeChallenge: "30-Day Fitness", icon: <FaDumbbell /> },
    { id: 2, name: "Book Club", members: 8, activeChallenge: "Read 4 Books in a Month", icon: <FaBook /> },
  ]

  const challenges = [
    { id: 1, name: "30-Day Fitness", progress: 60, daysLeft: 12, icon: <FaDumbbell /> },
    { id: 2, name: "Read 4 Books in a Month", progress: 25, daysLeft: 21, icon: <FaBook /> },
  ]

  const notifications = [
    { id: 1, message: "New task submitted in 30-Day Fitness", time: "2 hours ago" },
    { id: 2, message: "Sarah completed a challenge task", time: "5 hours ago" },
    { id: 3, message: "New member joined Book Club", time: "1 day ago" },
  ]

  return (
    <div className="flex flex-col w-[92%] ml-[7%] bg-gray-100">
      

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FaBell className="h-6 w-6" />
          </button>
        </header>
        {/* Sidebar */}
      <aside className="w-full bg-white p-6 shadow-md mb-[1.5rem]">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className=" flex gap-5 ">
          <button className="w-full flex items-center justify-start px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FaPlus className="mr-2 h-4 w-4" /> Create Group
          </button>
          <button className="w-full flex items-center justify-start px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FaPlus className="mr-2 h-4 w-4" /> Join Challenge
          </button>
         
        </div>
      </aside>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Groups */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Active Groups</h2>
            <p className="text-gray-500 mb-4">Groups you're currently participating in</p>
            <ul className="space-y-4">
              {groups.map((group) => (
                <li key={group.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-600">{group.icon}</span>
                    <div>
                      <h3 className="font-semibold">{group.name}</h3>
                      <p className="text-sm text-gray-500">{group.members} members</p>
                    </div>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
                    {group.activeChallenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Active Challenges */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Active Challenges</h2>
            <p className="text-gray-500 mb-4">Your ongoing challenges</p>
            <ul className="space-y-4">
              {challenges.map((challenge) => (
                <li key={challenge.id}>
                  <div className="flex items-center mb-2">
                    <span className="mr-2 text-gray-600">{challenge.icon}</span>
                    <h3 className="font-semibold">{challenge.name}</h3>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{challenge.progress}% complete</span>
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Notifications Panel */}
      <aside className="w-[30%] mb-[2rem] h-fit bg-white p-6 shadow-md ml-[2%]">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <div className="overflow-y-auto ">
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="border-b pb-2">
                <p className="text-sm">{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}