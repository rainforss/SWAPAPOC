import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useBlogs = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API}&content_type=marketingEmail&order=sys.createdAt`,
    fetcher
  );
  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error,
  };
};
