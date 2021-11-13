// import { CircularProgress } from '@mui/material';
// import { Box } from '@mui/system';

import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import Preloader from '../Components/Preloader/Preloader';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    // const location = useLocation();
    const {user, isLoading} = useAuth();


    if(isLoading){
        return(
          <Preloader></Preloader>
        );
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/account",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;