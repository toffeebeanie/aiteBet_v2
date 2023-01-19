import axios from "axios";

const BASE_URL = "https://aitebet.onrender.com";

export default {
  fetchAllScores: async () => {
    let res = await axios.get(`${BASE_URL}/tweets`);
    return res.data || [];
  },
  createNewScore: async (body) => {
    let res = await axios.post(`${BASE_URL}/tweets`, body);
    return res.data || [];
  },
};
