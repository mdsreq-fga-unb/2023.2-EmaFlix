import { isAuthenticated } from "../../../../Backend_node/auth/isAuthenticated";

import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element, }) {
    const isAuth = isAuthenticated();
    return(
        <Route element={isAuth ? element : <Navigate to='/login' />} />
    );
};

export default ProtectedRoute;