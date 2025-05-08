import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {
  const axiosPublic = useAxiosPublic();
  const { isPending, data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });
  return [isPending, categories];
};

export default useCategory;
