import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { CgAdidas } from "react-icons/cg";
import { FaShoppingCart, FaSearch  } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white py-4 sticky top-0 z-10">
        <div className="container flex justify-between items-center">
            <RxHamburgerMenu size={20} className="sm:hidden"/>
            <Link href="/" className="text-4xl hover:cursor-pointer">
              <CgAdidas />
            </Link>
            <ul className='gap-6 hidden sm:flex'>
              <Link href="/" className='navlink '>
                Home
              </Link>
              <li className="navlink">
                Shop
              </li>
              <li className="navlink">
                Blog
              </li>
              <li className="navlink">
                Pages
              </li>
              <li className="navlink">
                Contact
              </li>
            </ul>
            <div className="flex gap-6">
                <div className="relative cursor-pointer text-[20px]">
                  <FaShoppingCart/>
                  <div className='absolute top-[-10px] right-[-10px] px-[5px] bg-red-600 w-auto h-[20px] rounded-full text-white text-[14px] grid place-items-center'>
                    0
                  </div>
                </div>
                <FaSearch size={20}/>
            </div>
        </div>
    </div>
  )
}
