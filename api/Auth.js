import client from "./Client";

const login = (email, password) => client.post("/auth", { email, password });

export default {
  login,
};
