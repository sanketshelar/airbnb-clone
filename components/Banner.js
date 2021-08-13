import Image from 'next/image';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        objectPosition='bottom'
      />

      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg 2xl:text-xl font-semibold'>
          Not sure Where to go? Perfect.
        </p>
        <button className='text-purple-500 bg-white py-5 px-10 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 2xl:text-xl 2xl:px-16'>
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
