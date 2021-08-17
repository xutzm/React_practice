import classes from './TopMenu.module.css';

let classesAppActive = `${classes.App} ${classes.Active}`;
const TopMenu = () => {
  return (
    <div className={classesAppActive}>
      <nav>
        <a href="/home">home</a>
        <br/>
        <a href="/about">about</a>
      </nav>
    </div>
  );
}
export default TopMenu;