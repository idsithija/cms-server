import { useGetCurrentUserQuery } from "../api";
import { Outlet, useNavigate } from "react-router-dom";

const RouterGaurd = () => {
  const { data: currentUserData, isLoading } = useGetCurrentUserQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return;
  }
  if (!currentUserData?.currentUser) {
    navigate("/");
  }
  return <Outlet />;
};

export default RouterGaurd;
