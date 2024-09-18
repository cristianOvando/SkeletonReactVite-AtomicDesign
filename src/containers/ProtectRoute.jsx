import { Outlet, Navigate } from "react-router-dom";

function ProtectRoute({ hasInfo }) {
  return hasInfo ? <Outlet /> : <Navigate to="/"></Navigate>;
}
export default ProtectRoute;