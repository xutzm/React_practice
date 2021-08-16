import  classes from './TopMenu.module.css';

let classesAppActive = `${classes.App} ${classes.Active}`;
const TopMenu = () => {
  return (
    <div className={classesAppActive}>menu</div>
  );
}
export default TopMenu;