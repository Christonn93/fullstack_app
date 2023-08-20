import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
 const location = useLocation();

 const accessToken = true;

 return <>{!accessToken ? <Navigate to="/login" state={{ from: location }} replace /> : <Outlet />}</>;
};

export default RequireAuth;
