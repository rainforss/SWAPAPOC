import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useSingleBlog = (id: string) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API}&content_type=marketingEmail&fields.title=${id}`,
    fetcher
  );
  return {
    blog: data,
    isLoading: !error && !data,
    isError: error,
  };
};
