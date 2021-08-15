import Image from 'next/image';

function SmallCard({ img, location, distance }) {
  return (
    <div className='flex m-2 mt-5 items-center space-x-4 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out cursor-pointer rounded-lg'>
      {/* left */}
      <div className='relative h-16 w-16'>
        <Image src={img} layout='fill' className='rounded-lg' />
      </div>
      {/* right */}
      <div>
        <h2 className='font-semibold'>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
