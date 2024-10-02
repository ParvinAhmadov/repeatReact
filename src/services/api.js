import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

export const getData = async (url) => {
  try {
    const response = await http.get(url);
    console.log("Response from API:", response);
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
