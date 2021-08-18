import { NavLink } from 'react-router-dom';
import styles from './TopMenu.module.css';

let classesAppActive = `${styles.App} ${styles.App2}`;
const TopMenu = () => {
  return (
    <div className={classesAppActive}>
      <nav>
        <NavLink to="/home" activeClassName={styles.activeLink}>home</NavLink>
        <br/>
        <NavLink to="/about" activeClassName={styles.activeLink}>about</NavLink>
        <br/>
        <NavLink to="/posts" activeClassName={styles.activeLink}>posts</NavLink>
      </nav>
    </div>
  );
}
export default TopMenu;