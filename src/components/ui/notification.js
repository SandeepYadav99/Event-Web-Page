import { useDispatch, useSelector } from "react-redux";
import classes from "./notification.module.css";
import { hideNotification } from "@/store/notificationSlice";
import { useEffect } from "react";

const Notification=({title, message, status })=> {
  const { notifications } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (
      (notifications && notifications.status === "success") ||
      notifications.status === "error"
    ) {
      timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, notifications]);
  

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={() => dispatch(hideNotification())}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
