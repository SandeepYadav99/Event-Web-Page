import React from "react";
import EventItemList from "./event-item";
import styles from "./event-list.module.css";
const EventList = ({items}) => {
 
  return (
    <ul className={styles.list}>
      {items?.map((item) => (
        <EventItemList items={item} key={item?.id} />
      ))}
    </ul>
  );
};

export default EventList;
