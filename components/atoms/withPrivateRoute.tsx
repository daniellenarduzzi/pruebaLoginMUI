import { useEffect } from 'react';
import Router from 'next/router';
import { useQuery, gql } from '@apollo/client';

const login = '/login?redirected=true';

const VIEWER_QUERY = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;
interface WithPrivateRouteProps {
  // eslint-disable-next-line no-undef
  WrappedComponent: () => JSX.Element
}

const WithPrivateRoute = ({ WrappedComponent }: WithPrivateRouteProps) => {
  const HocComponent = ({ ...props }) => {
    const { data, loading } = useQuery(VIEWER_QUERY);
    const viewer = data?.viewer;
    const shouldRedirect = !(loading || viewer);
    useEffect(() => {
      if (shouldRedirect) {
        Router.replace(login);
      }
    }, [shouldRedirect]);
    return <WrappedComponent {...props} />;
  };

  return HocComponent;
};

export default WithPrivateRoute;
