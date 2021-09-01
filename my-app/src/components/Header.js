import logo from './../logo.svg';
import TopMenu from './Header/TopMenu';
import classes from './Header.module.css';



const Header = () => {

  return(
    <div className={classes.App}>
      <TopMenu/>
  <img src={logo} className="App-logo" alt="logo" />


  </div>
  );
}
export default Header;