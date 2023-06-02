import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MdDashboard,
  MdShoppingCart,
  MdPerson,
  MdMessage,
  MdNoteAdd,
} from 'react-icons/md';
import { RiProductHuntFill } from 'react-icons/ri';
import Navbar from './Navbar';

const NavItems = [
  {
    name: 'DashBoard',
    link: '',
    icon: MdDashboard,
  },
  {
    name: 'Products',
    link: '/pages/404',
    icon: RiProductHuntFill,
  },
  {
    name: 'Orders',
    link: '/pages/404',
    icon: MdShoppingCart,
  },
  {
    name: 'Customers',
    link: '/pages/404',
    icon: MdPerson,
  },
  {
    name: 'Message',
    link: '/pages/404',
    icon: MdMessage,
  },
  {
    name: 'Reports',
    link: '/pages/404',
    icon: MdNoteAdd,
  },
];

const Sidebar2 = () => {
  return (
    <div className='flex bg-sky-100'>
      {/* --Sidebar-- */}
      <div className='border-2 bg-blue-950 text-white w-64 h-screen pt-14 flex flex-col'>
        <div className='cursor-pointer flex flex-col items-center'>
          <Image src='/logo4.png' width={120} height={50} alt='Shopify Logo' />
          <h1 className='text-center text-lg mt-1 hover:scale-110 duration-200 ease-in-out hover:text-sky-200'>
            Shopify
          </h1>
          <p className='text-xs hover:scale-110 duration-200 ease-in-out hover:text-sky-200'>
            Best way to shop now
          </p>
        </div>
        <div className='mt-16 pl-3 px-2 text-lg'>
          {NavItems.map((nav_items, index) => {
            const Icon = nav_items.icon;
            return (
              <div
                key={index}
                className='mt-3 mb-4 flex items-center p-2 transition duration-75 hover:bg-slate-100 hover:text-black rounded-md'>
                <Icon className='mr-2 cursor-pointer' />
                <Link href={nav_items.link}>{nav_items.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* --Navbar-- */}
      <div className='w-full'>
        <Navbar />
      </div>
    </div>
  );
};

export default Sidebar2;
