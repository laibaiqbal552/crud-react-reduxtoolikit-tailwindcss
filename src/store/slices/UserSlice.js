import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "./../actions";
const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload, "adduser payload");
    },
    removeUser(state, action) {
      let userIndex = state.indexOf(action.payload);
      state.splice(userIndex, 1);
    },
    editUser(state, action) {
      // let userIndex = state.indexOf(action.payload);
      // state[userIndex] = state.push(action.payload);
      // console.log(action.payload, "edit payload");
    },
    updateUser(state, action) {
      const id = action.payload.id;
      console.log(id, "@step 1");
      const inputIndex = state.findIndex((i) => i.id === id);
      state[inputIndex] = action.payload;
      // newListUpdate[inputIndex] = InputValue2;
      // setList(newListUpdate);
      // const index = state.findIndex(
      //   (tutorial) => tutorial.id === action.payload
      // );
      // state[index] = {
      //   ...state[index],
      //   ...action.payload,
      // };
    },
    // deleteUsers(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(deleteUsers, () => {
      return [];
    });
  },
});

export default UserSlice.reducer;

export const { addUser, removeUser, editUser, updateUser } = UserSlice.actions;
