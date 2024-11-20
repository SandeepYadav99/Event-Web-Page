"use client";
import { useRef } from "react";
import Button from "../ui/button";
import styles from "./events-search.module.css";

const EventsSearch = ({ onSearch }) => {
  const yearSelect = useRef();
  const monthSelect = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const year = yearSelect.current.value;
    const month = monthSelect.current.value;
   
    onSearch(year, month)
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearSelect}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthSelect}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Septemer</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button link={""}>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
