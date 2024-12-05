"use client";
import { useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "@/store/notificationSlice";

const NewsletterRegistration=()=> {
  const emailInputRef = useRef();
  const dispatch = useDispatch();

  const  registrationHandler=async(event)=> {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    dispatch(
      showNotification({
        title: "Signing up...",
        message: "Registration for newsletter.",
        status: "pending",
      })
    );

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to register!");
      }

      const data = await response.json();
      if (emailInputRef.current) {
        emailInputRef.current.value = "";
      }
      dispatch(
        showNotification({
          title: "Success!",
          message: data.message || "Successfully registered for newsletter!",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          title: "Error",
          message: error.message || "Something went wrong!",
          status: "error",
        })
      );
    }
  }

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
}

export default NewsletterRegistration;
