"use client";
import { useActionState } from "react";
import classes from "./newsletter-registration.module.css";
import { useDispatch } from "react-redux";
import { showNotification } from "@/store/notificationSlice";
import { serviceRegistrationPage } from "@/service/registration.service";

const NewsletterRegistration = () => {
  const dispatch = useDispatch();
  // Teting for ReactJS 19 Updated verson Action Feature
  const registrationHandler = async (previousState, formData) => {
    const enteredEmail = formData.get("email");

    dispatch(
      showNotification({
        title: "Signing up...",
        message: "Registration for newsletter.",
        status: "pending",
      })
    );
    serviceRegistrationPage({ email: enteredEmail }).then((res) => {
      if (!res.error) {
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
  };
  const [error, submitAction, isPending] = useActionState(
    registrationHandler,
    null
  );

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form action={submitAction}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email"
            // ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
