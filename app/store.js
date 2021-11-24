import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  return: { reducer },
});
// console.log("helo man", reducer);
