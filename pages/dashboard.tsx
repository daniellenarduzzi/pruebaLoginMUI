import Head from 'next/head'
import withPrivateRoute from '@/atoms/withPrivateRoute';

const Dashboard = () => (
    <>
      <Head>
        <title>Mi cuenta  - Arreglos YA!</title>
      </Head>
      <main>
      </main>
    </>
)

export default withPrivateRoute({WrappedComponent: Dashboard})