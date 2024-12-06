"use client";
import { useCallback, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { useDispatch } from "react-redux";
import { showNotification } from "@/store/notificationSlice";
import { serviceRegistrationPage } from "@/service/registration.service";

const NewsletterRegistration = () => {
  const emailInputRef = useRef();
  const dispatch = useDispatch();

  const registrationHandler = useCallback(async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    dispatch(
      showNotification({
        title: "Signing up...",
        message: "Registration for newsletter.",
        status: "pending",
      })
    );
    serviceRegistrationPage({ email: enteredEmail }).then((res) => {
      if (!res.error) {
        emailInputRef.current.value = "";
        dispatch(
          showNotification({
            title: "Success!",
            message: res.message || "Successfully registered for newsletter!",
            status: "success",
          })
        );
      } else {
        dispatch(
          showNotification({
            title: "Error",
            message: res.message || "Something went wrong!",
            status: "error",
          })
        );
      }
    });
  }, []);

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
