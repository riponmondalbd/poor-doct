import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDoctors = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    refetch,
    data: doctors = [],
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctors");
      return res.data;
    },
  });
  return [isPending, refetch, doctors];
};

export default useDoctors;
