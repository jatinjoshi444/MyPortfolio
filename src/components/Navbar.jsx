import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ImCross } from "react-icons/im"

const Navbar = () => {

    const [open,setOpen] = useState(false);
    const [display, setDisplay] = useState("hidden");

    function toggleClick() {
        if(open) {
            setDisplay("hidden");
            setOpen(false);
        } else {
            setDisplay("block");
            setOpen(true);
        }
    }

  return (
    <>
        <div className='flex h-16 items-center justify-between'>
            <div>
                <h1 className='font-extrabold text-3xl'>Portfolio</h1>
            </div>
            <div>
            {open ? (
                <ImCross className="lg:hidden" fontSize={25} onClick={toggleClick} />
            ):(
                <FaBars className="lg:hidden" fontSize={25} onClick={toggleClick} />
            )}
                <ul className='flex gap-5 font-bold lg:flex hidden text-xl lg:block'>
                    <li class="border-b-4 border-yellow-500">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li class="border-b-4 border-yellow-500">
                        <Link to={"/experince"}>Experince</Link>
                    </li>
                    <li class="border-b-4 border-yellow-500">
                        <Link to={"/skills"}>Skills</Link>
                    </li>
                    <li class="border-b-4 border-yellow-500">
                        <Link to={"/projects"}>Projects</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className={`${display}`}>
            <ul className='flex flex-col absolute right-0 gap-5 font-bold text-xl bg-gray-900 text-white w-1/2 text-center h-full pt-5'>
                <li class="hover:border-b-4 hover:border-yellow-500">
                    <Link to={"/"}>Home</Link>
                </li>
                <li class="hover:border-b-4 hover:border-yellow-500">
                    <Link to={"/experince"}>Experince</Link>
                </li>
                <li class="hover:border-b-4 hover:border-yellow-500">
                    <Link to={"/skills"}>Skills</Link>
                </li>
                <li class="hover:border-b-4 hover:border-yellow-500">
                    <Link to={"/projects"}>Projects</Link>
                </li>
            </ul>
            </div>
    </>
  )
}

export default Navbar