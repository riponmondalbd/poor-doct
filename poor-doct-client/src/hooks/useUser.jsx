import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { refetch, data: currentUser = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${user.email}`);
      return res.data;
    },
  });
  return [refetch, currentUser];
};

export default useUser;
