// import { CircularProgress } from '@mui/material';
// import { Box } from '@mui/system';

import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import Preloader from '../Components/Preloader/Preloader';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    // const location = useLocation();
    const {admin, isLoading} = useAuth();

    // check loading
    if(isLoading){
        return(
            <Preloader></Preloader>
            );
        }
 
    return (
        <Route
        {...rest}
        render={({ location }) =>
        admin ? (
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

export default AdminRoute;