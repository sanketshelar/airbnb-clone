import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy');

  const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy');

  const range = `${formattedStartDate}-${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuest}`} />
      <main className='max-w-[1600px] mx-auto'>
        <section className=' flex-grow pt-14 px-6'>
          <p className='text-lg'>
            300+ Stays ({range}) for {numberOfGuest} number of guests
          </p>

          <h1 className='text-2xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden lg:inline-flex space-x-3 mb-5 text-gray-500 whitespace-nowrap'>
            <p className='button'>Cancellation flexibility</p>
            <p className='button'>Type of place</p>
            <p className='button'>Price</p>
            <p className='button'>Instant Book</p>
            <p className='button'>More filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResults?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                long={item.long}
                lat={item.lat}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
