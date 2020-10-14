import Head from 'next/head'
import withPrivateRoute from '@/atoms/withPrivateRoute';

const WrappedComponent = () => (
    <>
      <Head>
        <title>Arreglos YA!</title>
      </Head>
      <main>
        index
      </main>
    </>
)

export default withPrivateRoute({WrappedComponent})