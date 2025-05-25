import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useBookings = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // console.log(user);

  const { data: appointments = [] } = useQuery({
    queryKey: ["appointments", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `https://poor-doct-server.vercel.app/appointments?email=${user.email}`
      );
      return res.data;
    },
  });
  // console.log(appointments);
  return [appointments];
};

export default useBookings;
