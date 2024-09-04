import styles  from '../styles/TopNav.module.css'

function TopNav() {
  return (
    <div className={styles.TopNavContainer}>
      <input className={styles.searchBar} type="text" placeholder="Search item..." />
      <button className={styles.uploadCSVButton}>Upload CSV</button>
    </div>
  );
}

export default TopNav;



