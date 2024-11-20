import styles from './event-content.module.css';

const EventContent=({children})=> {
  return (
    <section className={styles.content}>
      {children}
    </section>
  );
}

export default EventContent;