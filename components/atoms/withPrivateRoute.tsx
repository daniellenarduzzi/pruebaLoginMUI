import React from 'react';
import Router from 'next/router';
import { useLazyQuery, gql } from '@apollo/client';
import { getLoginSession } from '@/authUtils/index'
const login = '/login?redirected=true'; // Define your login route address.
/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = async (req) => {
  const { id } = await getLoginSession(req)
  if(id)
    return { auth: true }
  return { auth: null };
};

const WrappedComponent = (props): any => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async ({req, res }) => {
    const userAuth = await checkUserAuthentication(req);

    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (res) {
        res?.writeHead(302, {
          Location: login,
        });
        res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps(userAuth);
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default WrappedComponent

