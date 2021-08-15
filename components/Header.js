import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const router = useRouter();

  // console.log(searchInput);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleCancel = () => {
    setSearchInput('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest,
      },
    });
  };

  const scrollHandler = () => {
    if (window.scrollY > 630) {
      setSearchInput('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4  md:px-10'>
      {/* Left */}
      <div
        className='relative flex items-center h-9 cursor-pointer my-auto ml-10'
        onClick={() => router.push('/')}
      >
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
          placeholder={placeholder ? placeholder : 'Start your search'}
          className='pl-5 flex-grow bg-transparent outline-none placeholder-gray-900 placeholder-opacity-100'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl font-semibold flex-grow'>
              Number of Guests
            </h2>

            <UsersIcon className='h-5' />
            <input
              type='number'
              min={1}
              className='w-12 pl-2 text-lg outline-none text-red-400'
              value={numberOfGuest}
              onChange={(e) => setNumberOfGuest(e.target.value)}
            />
          </div>
          <div className='flex  '>
            <button className='flex-grow text-gray-400' onClick={handleCancel}>
              Cancel
            </button>
            <button className='flex-grow text-red-400' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
