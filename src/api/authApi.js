import axiosClient from "./axiosClient";

export async function registerUser(userData) {
  const response = await axiosClient.post("/auth/register", userData);
  return response.data;
}