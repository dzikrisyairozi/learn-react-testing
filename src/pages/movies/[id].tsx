import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getPopularMovies } from '@/pages/api/rq-tmdb';
import Details from '@/components/shared/Details'
import Layout from '@/components/layout/Layout';
import Head from 'next/head';

function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useQuery(['movieDetails', id], () => getPopularMovies(1, Number(id)));

  if (isLoading) {
    return (
        <div className='min-h-screen bg-gray-800 flex justify-center items-center'>
            <p className='text-white text-4xl font-semibold'>Loading...</p>
        </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
          <Layout>
          <Head>
            <title>Demo</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className='min-h-screen bg-gray-700'>
            <div className='flex flex-col justify-center items-center py-10'>
                <Details
                        backdrop_path={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                        title={data.title}
                        release_date={data.release_date}
                        popularity={data.popularity}
                        overview={data.overview} 
                />
                {/* <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.title} /> */}
            </div>
          </main>
      </Layout>
  );
}

export default MovieDetails;
