import React from 'react';
import { Link } from "react-scroll";
// import {logo} from "../../assest/images/index";
import { navlinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-grey-300'>
        <div>
            {/* <img src={logo} alt='logo' /> */}
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {
                    navlinksdata.map(({ _id, title, link }) => (
                        <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                            <Link
                            activeClass='active'
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                                {title}
                            </Link>
                            </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar;