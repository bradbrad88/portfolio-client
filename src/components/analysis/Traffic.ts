import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch, { Req } from "hooks/useFetch";

const Traffic = () => {
  const location = useLocation();
  const { postRequest } = useFetch();

  const sendAnalytics = useCallback(() => {
    const req: Req = {
      url: "analytics",
      withCredentials: true,
      data: {
        route: location.pathname,
      },
    };
    postRequest(req);
  }, [location.pathname]);

  useEffect(() => {
    sendAnalytics();
  }, [sendAnalytics]);
  return null;
};

export default Traffic;
