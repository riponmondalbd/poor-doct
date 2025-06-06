import axios from "axios";

const axiosPublic = axios.create({
  baseURL: `https://poor-doct-server.vercel.app`,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
