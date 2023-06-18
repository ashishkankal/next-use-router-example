"use client"
import Link from "next/link"
export default function Nav() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800"  href="/page-example">Page Directory Page</Link>
      </li>
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800" href="/">App Directory Page</Link>
      </li>
    </ul>
  )
}
