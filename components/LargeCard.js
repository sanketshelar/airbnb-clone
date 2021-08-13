import Image from 'next/image';

const LargeCard = ({ img, title, description, btnText }) => {
  return (
    <div className='relative cursor-pointer '>
      <div className='relative h-[500px] min-w-[300px]'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>

      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64 font-bold'>{title}</h3>
        <p>{description}</p>
        <button className='bg-gray-900 px-4 py-2 rounded-lg text-white mt-5'>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
