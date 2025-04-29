import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/doctors",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
