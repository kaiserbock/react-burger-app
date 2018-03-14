import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-b1977.firebaseio.com/"
});

export default instance;
