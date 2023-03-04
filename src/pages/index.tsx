import Head from 'next/head'
import Hero from '@/sections/Hero'
import Layout from '@/components/layout/Layout'

export default function Home() {
  return (
    <>
      <Layout>
            <Head>
              <title>Demo</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=''>
              <Hero/>
            </main>
        </Layout>
    </>
  )
}
