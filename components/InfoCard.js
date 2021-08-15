import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) => {
  return (
    <div className='flex flex-row space-x-4 mb-14 py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t-2'>
      <div className='relative h-[18rem] min-w-[22rem] md:w-80 flex-shrink-0'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='flex flex-col flex-grow'>
        <div className='flex flex-row justify-between'>
          <h3 className='text-lg text-gray-500 pb-1'>{location}</h3>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h2 className='text-xl font-semibold pb-3'>{title}</h2>

        <div className='border-b w-10 pt-2'></div>
        <p className='text-base text-gray-500 pt-2 flex-grow'>{description}</p>

        <div className='flex justify-between'>
          <p className='flex flex-row font-semibold'>
            <StarIcon className='h-5 text-red-400 pr-1' />
            {star}
          </p>

          <div className=''>
            <p className='font-bold text-xl'>{price}</p>
            <p className='text-gray-500 border-b-2'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
