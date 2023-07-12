// components/Navbar.js
import Link from 'next/link'
import React from 'react'

export default function Navbar(): React.ReactElement {
  return (
    <nav className="flex items-center justify-center bg-gray-800 text-white py-2">
      <ul className="flex space-x-4">
        <li>
          <Link className="hover:text-gray-300" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-300" href="/space">
            Space
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-300" href="/cube">
            Cube
          </Link>
        </li>
      </ul>
    </nav>
  )
}
