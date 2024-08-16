import Link from 'next/link'
import React from 'react'
import { Heart, House, Search, ShoppingCart, Truck, User } from 'lucide-react';

const AppNavbar = ({ isLogin }) => {
    return (
        <div>
            <div className="navbar bg-base-300 items-center">
                <div className="navbar-start items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link href='/'>
                                    <House className='w-6 h-6' />
                                    Home
                                </Link></li>
                                <li><Link href={`${isLogin ? ('/user/cart') : ('/user/login')}`}>
                                    <ShoppingCart className='w-6 h-6' />
                                    Cart
                                </Link></li>
                                <li><Link href={`${isLogin ? ('/user/wish') : ('/user/login')}`}>
                                    <Heart className='w-6 h-6' />
                                    Wish
                                </Link></li>
                                <li><Link href={`${isLogin ? ('/user/order') : ('/user/login')}`}>
                                    <Truck className='w-6 h-6' />
                                    Order
                                </Link></li>
                            </ul>
                        </ul>
                    </div>

                    <h1 className="text-xl md:text-3xl font-semibold uppercase">NextShop</h1>

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 pl-5">
                            <li><Link href='/'>
                                <House className='w-6 h-6' />
                                Home
                            </Link></li>
                            <li><Link href={`${isLogin ? ('/user/cart') : ('/user/login')}`}>
                                <ShoppingCart className='w-6 h-6' />
                                Cart
                            </Link></li>
                            <li><Link href={`${isLogin ? ('/user/wish') : ('/user/login')}`}>
                                <Heart className='w-6 h-6' />
                                Wish
                            </Link></li>
                            <li><Link href={`${isLogin ? ('/user/order') : ('/user/login')}`}>
                                <Truck className='w-6 h-6' />
                                Order
                            </Link></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-end gap-3 flex items-center">
                    <div className="hidden md:block">
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Search" type='text' />
                            <button className="btn join-item btn-neutral">
                                <Search className='w-6 h-6' />
                            </button>
                        </div>
                    </div>

                    {
                        isLogin ? (
                            <Link href='/user/profile' className="btn btn-md btn-accent">
                                <User className='h-6 w-6' />
                            </Link>

                        ) : (
                            <></>
                        )
                    }

                    {
                        isLogin ? (
                            <Link href='/api/user/logout' className="btn btn-md btn-accent btn-outline">
                                Logout
                            </Link>
                        ) : (
                            <Link href='/user/login' className="btn btn-md btn-accent btn-outline">
                                Login
                            </Link>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default AppNavbar