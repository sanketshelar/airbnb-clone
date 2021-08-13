import Image from 'next/image';

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4  md:px-10'>
      {/* Left */}
      <div className='relative flex items-center h-9 cursor-pointer my-auto ml-10'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle */}
      <div className='flex rounded-full border-2 py-1 md:shadow-sm '>
        <input
          type='text'
          placeholder='Start your search'
          className='pl-5 flex-grow bg-transparent outline-none placeholder-gray-900 placeholder-opacity-100'
        />
        <SearchIcon className='hidden md:inline-flex h-9 bg-red-500 rounded-full text-white p-2 mr-2 cursor-pointer' />
      </div>

      {/* Right */}
      <div className='flex items-center justify-end space-x-7'>
        <p className='cursor-pointer font-semibold text-black-500 hidden lg:inline-flex'>
          Become a host
        </p>
        <GlobeAltIcon className='h-6 cursor-pointer font-semibold text-gray-700' />

        <div className='flex border-2 rounded-full p-2 space-x-2 items-center cursor-pointer text-gray-500'>
          <MenuIcon className='h-5' />
          <UserCircleIcon className='h-9' />
        </div>
      </div>
    </header>
  );
}

export default Header;
