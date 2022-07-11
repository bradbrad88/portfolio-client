import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export type Req = AxiosRequestConfig;

interface ApiError {
  message: string;
  errno: number;
}
interface ResponseDataError<T> {
  data: T | null;
  error: ApiError | null;
}

const useFetch = () => {
  const [working, setWorking] = useState(false);

  const postRequest = async <T>(req: AxiosRequestConfig): Promise<T | null> => {
    req.method = "POST";
    const res = await sendRequest<T>(req);
    if (!res) return null;
    return res.data;
  };

  const deleteRequest = async (req: AxiosRequestConfig): Promise<true | null> => {
    req.method = "DELETE";
    const res = await sendRequest(req);
    if (!res) return null;
    return true;
  };

  const sendRequest = async <T>(req: AxiosRequestConfig): Promise<ResponseDataError<T>> => {
    req.baseURL = process.env.REACT_APP_SERVER_API;
    setWorking(true);
    try {
      const res: AxiosResponse<T> = await axios(req);
      setWorking(false);
      return { data: res.data, error: null };
    } catch (error: any) {
      setWorking(false);
      const err = error as AxiosError;
      if (err.response)
        return { data: null, error: err.response.data } as ResponseDataError<T>;
      if (err.request)
        return {
          data: null,
          error: { message: "Service is currently down", errno: 5 },
        } as ResponseDataError<T>;
      return {
        data: null,
        error: { errno: 4, message: "Bad request: request never launched" },
      } as ResponseDataError<T>;
    }
  };

  return { postRequest, deleteRequest, working };
};

export default useFetch;
