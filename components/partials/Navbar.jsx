import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { MdNotifications } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import Link from 'next/link';
// import { CgProfile } from 'react-icons/cg';
// import { GoSignOut } from 'react-icons/go';
import Card1 from './Card1';
import Table from './Table';

const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Place any search logic here using the search state
    console.log(search);
    setSearch('');
  };
  return (
    <div className='flex flex-col'>
      {/* --Navbar-- */}
      <div className='h-20 w-full shadow-lg flex justify-between items-center px-5 lg:px-14'>
        <div>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search...'
            className='rounded-lg p-2 mr-1 hover:bg-slate-100'
          />
          <button
            onClick={handleSearch}
            className='bg-slate-400 p-2 rounded-xl hover:bg-slate-500'>
            <RiSearchLine />
          </button>
        </div>
        <div className='flex gap-2'>
          <div>
            <Link href='https://datavinci.services/'>
              <button className='px-3 py-1 text-sm  bg-blue-800 text-white rounded-2xl hover:bg-blue-900'>
                Visit Website
              </button>
            </Link>
          </div>
          <div>
            <Link href='https://datavinci.services/the-team/'>
              <button className='px-3 py-1 text-sm bg-blue-800 text-white rounded-2xl hover:bg-blue-900'>
                Team
              </button>
            </Link>
          </div>
          <div>
            <Link href='https://datavinci.services/sub-contracting/'>
              <button className='px-3 py-1 text-sm bg-blue-800 text-white rounded-2xl hover:bg-blue-900'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Menu>
            <MenuButton className='text-2xl cursor-pointer bg-gray-300 p-1 rounded-2xl'>
              <MdNotifications />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      {/* --MainBody-- */}
      <div className='pl-4 lg:pl-10 pt-8'>
        <div>
          {/* --Card-- */}
          <Card1 />
        </div>
        <div className='mt-6'>
          {/* --Table-- */}
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
