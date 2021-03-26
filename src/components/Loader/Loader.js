import styles from './loader.module.css';

const Loader = ({ show }) => {
  return show ? <div className={styles.loader}></div> : null;
};

export default Loader;
