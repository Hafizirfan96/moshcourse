import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
  name: "irfan",
  age: "25",
  status: "react native",
};

export default createReducer(initialstate, (builder) => {
  builder.addCase("UPDATE_AGE", (state, action) => {
    state.age = action.payload;
  });
  builder.addCase("UPDATE_NAME", (state, action) => {
    state.name = action.payload;
  });
});

// export default (state= initialstate, action) => {
//     if(action.type=='UPDATE_AGE'){
//         return{
//             ...state,
//             age:action.payload
//         }
//     }
//     return state
// }
