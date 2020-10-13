import { useEffect } from 'react';
import Router from 'next/router';
import { useQuery, gql } from '@apollo/client';
import { getLoginSession } from '@/authUtils/index'
const login = '/login?redirected=true'; // Define your login route address.
/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = async (req) => {
  const { id } = await getLoginSession(req)
  if (id)
    return { auth: true }
  return { auth: null };
};

const VIEWER_QUERY = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`

const WrappedComponent = (props): any => {
  const hocComponent = ({ ...props }) => {
    const { data, loading, error } = useQuery(VIEWER_QUERY)
    const viewer = data?.viewer
    const shouldRedirect = !(loading || viewer)
    useEffect(() => {
      if (shouldRedirect) {
        Router.replace(login);
      }
    }, [shouldRedirect])
    return <WrappedComponent {...props} />;
  }

  return hocComponent;
};

export default WrappedComponent
