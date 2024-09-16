import React, { useContext, useState } from 'react';
import { FaSearch, FaHome } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoPersonSharp, IoCloseSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import MobHeader from './MobHeader';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import logo from '../../assets/logo.png';
import { FaBoxOpen } from "react-icons/fa6";
import { ShopContext } from '../../Context/ShopContext';
const Headers = () => {
    const { getTotalcartItem} = useContext(ShopContext);

    const [toggle, setToggle] = useState(false);

    return (
        <header className='bg-white shadow-lg'>
            <div className='lg:container lg:mx-auto flex justify-between items-center py-4 lg:px-0 px-1'>
                {/* Logo and Brand Name */}
                <div className='flex items-center space-x-3'>
                    <img src={logo} alt="Logo" className='h-12' />
                    <div className=' flex flex-col'>
                    <h1 className='text-2xl font-normal underline'>
                        Component Mitra
                    </h1>
                    <h1 className='text-sm font-semibold mt-[-0.4rem]'>
                    Your Innovation, Our Parts
                    </h1>
                    </div>
                </div>

                {/* Search Bar */}
                <div className='flex-1 hidden lg:flex justify-center'>
                    <div className='flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-md shadow-sm'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='w-full bg-transparent border-none outline-none px-4 py-2 text-gray-700 text-lg placeholder-gray-500'
                        />
                        <button className='bg-[--primary-color] hover:bg-[--secondary-color] text-white px-4 py-4 transition-all duration-200 ease-in-out'>
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Cart and Login/Sign In */}
                <div className='hidden lg:flex items-center gap-6'>
                    <div>
                        <Link to='/' data-tooltip-id="homeTooltip">
                            <button className='text-3xl text-gray-700 hover:text-[--secondary-color] transition duration-200 ease-in-out'>
                                <FaHome />
                            </button>
                        </Link>
                        <Tooltip id="homeTooltip" content="Home" place="bottom" />
                    </div>
                    <div>
                        <Link to='/myorder' data-tooltip-id="myordreTooltip">
                            <button className='text-3xl text-gray-700 hover:text-[--secondary-color] transition duration-200 ease-in-out'>
                                <FaBoxOpen />
                            </button>
                        </Link>
                        <Tooltip id="myordreTooltip" content="MyOrder" place="bottom" />
                    </div>

                    <div className='relative'>
                        <Link to='cart' data-tooltip-id="cartTooltip">
                            <button className='text-3xl text-gray-700 hover:text-[--secondary-color] transition duration-200 ease-in-out'>
                                <BsCart4 />
                            </button>
                            <div className='absolute top-[-0.5rem] right-[-0.5rem] bg-[--secondary-color] text-white text-xs font-semibold px-2 py-0.5 rounded-full'>
                               {getTotalcartItem()}
                            </div>
                        </Link>
                        <Tooltip id="cartTooltip" content="Cart" place="bottom" />
                    </div>
                   

                    <div>
                        <Link to='profile' data-tooltip-id="profileTooltip">
                            <button className='text-3xl text-gray-700 hover:text-[--secondary-color] transition duration-200 ease-in-out'>
                                <IoPersonSharp />
                            </button>
                        </Link>
                        <Tooltip id="profileTooltip" content="Profile" place="bottom" />
                    </div>

                    <div>
                        <Link to='login' data-tooltip-id="loginTooltip">
                            <button className='bg-[--primary-color] px-3 py-2 text-white  font-semibold hover:bg-[--secondary-color] transition duration-200 ease-in-out'>
                                Login/SignUp
                            </button>
                        </Link>
                        {/* <Tooltip id="loginTooltip" content="Login/SignUp" place="bottom" /> */}
                    </div>
                </div>

                <div className='lg:hidden block' onClick={() => { setToggle(!toggle) }}>
                    {toggle ? <IoCloseSharp className='text-4xl font-bold' /> : <CiMenuFries className='text-3xl font-bold' />}
                </div>
            </div>

            {toggle && <MobHeader toggle={setToggle}  />}
        </header>
    );
}

export default Headers;
