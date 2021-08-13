import Image from 'next/image';

export const MediumCard = ({ img, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative h-96 w-96'>
        <Image src={img} layout='fill' className='rounded-lg' />
      </div>
      <h3 className='text-xl font-semibold mt-3'>{title}</h3>
    </div>
  );
};
