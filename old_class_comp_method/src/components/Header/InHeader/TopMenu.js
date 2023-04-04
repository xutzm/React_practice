import { NavLink } from 'react-router-dom';
import styles from './TopMenu.module.css';

let classesAppActive = `${styles.App} ${styles.App2}`;
const TopMenu = () => {
  return (
    <div className={classesAppActive}>
      <nav>
        <NavLink to="/IndexPage" activeClassName={styles.activeLink}>IndexPage</NavLink>
        <br/>
        <NavLink to="/InputTextPage" activeClassName={styles.activeLink}>InputTextPage</NavLink>

      </nav>
    </div>
  );
}
export default TopMenu;