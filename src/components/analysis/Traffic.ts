import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch, { Req } from "hooks/useFetch";

const Traffic = () => {
  const location = useLocation();
  const { postRequest } = useFetch();
  useEffect(() => {
    const sendAnalytics = () => {
      const req: Req = {
        url: "analytics",
        data: {
          route: location.pathname,
        },
      };
      postRequest(req);
    };
    sendAnalytics();
  }, [location]);
  return null;
};

export default Traffic;
