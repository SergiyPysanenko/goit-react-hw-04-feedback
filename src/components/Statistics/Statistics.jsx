import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Good: {good}</li>
      <li className={styles.item}>Neutral: {neutral}</li>
      <li className={styles.item}>Bad: {bad}</li>
      <li className={styles.item}>Total: {total}</li>
      <li className={styles.item}>
        Positive feedback: {percent > 0 ? `${percent}%` : 0}
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default Statistics;