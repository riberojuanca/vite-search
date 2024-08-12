import { useEffect, useState } from "react";

export type ResponseType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function useFetch(url: string) {
  const [data, setData] = useState<ResponseType[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);
  return { data };
}
