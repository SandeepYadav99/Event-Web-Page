import styles from './error-alert.module.css';

function ErrorAlert({children}) {
  return <div className={styles.alert}>{children}</div>;
}

export default ErrorAlert;