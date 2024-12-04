import axios from "axios";

const chatAPI = axios.create({
  withCredentials: true, // Include cookies in cross-origin requests
});

export default chatAPI;
