import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDoctors = () => {
  const axiosPublic = useAxiosPublic();
  const { isPending, data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctors");
      return res.data;
    },
  });
  return [isPending, doctors];
};

export default useDoctors;
