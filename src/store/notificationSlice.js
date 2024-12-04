
import { createSlice } from "@reduxjs/toolkit";

const notificationState = {
  notifications: {
    title: "",
    message: "",
    status: "",
  },
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationState,
  reducers: {
    showNotification: (state, action) => {
      const { title, message, status } = action.payload;
      state.notifications = {
        title: title,
        message: message,
        status: status,
      };
    },
    hideNotification: (state, action) => {
      const { title, message, status } = action.payload;
      state.notifications = {
        title: title,
        message: message,
        status: status,
      };
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;