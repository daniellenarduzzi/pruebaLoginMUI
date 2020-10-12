import Head from 'next/head'
import withPrivateRoute from '@/atoms/withPrivateRoute';

const Index = () => (
    <>
      <Head>
        <title>Arreglos YA!</title>
      </Head>
      <main>
        atroden
      </main>
    </>
)

export default withPrivateRoute(Index)