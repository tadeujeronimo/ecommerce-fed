import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "../routes";

const usePageTitle = () => {
  const location = useLocation();
  const currentRoute = routes.find((route) => route.path === location.pathname);
  useEffect(() => {
    document.title = (currentRoute ? currentRoute.title : "Not Found") + " - " + process.env.REACT_APP_NAME;
  }, [location, currentRoute]);
};

export default usePageTitle;
