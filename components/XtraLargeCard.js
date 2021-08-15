import Image from 'next/image';

const XtraLargeCard = ({ items, urlPrefix }) => {
  return (
    <div className=' flex flex-row space-x-3 overflow-scroll scrollbar-hide p-1'>
      {items?.map((item, index) => (
        <div key={index}>
          <div className='relative h-[30rem] w-[30rem] hover:scale-95 transition transform duration-200 ease-out '>
            <Image
              src={urlPrefix + item.img}
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
            />
            <Image
              src={urlPrefix + item.img}
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
            />
            <Image
              src={urlPrefix + item.img}
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
            />
          </div>
          <span>
            <h2 className='text-xl font-semibold mt-2'>{item.title}</h2>
            <p className='text-lg'>{item.p}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default XtraLargeCard;
