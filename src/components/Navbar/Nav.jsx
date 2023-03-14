import SearchBar from "./SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
  return(
    <nav className={style.navMenu}>
      <Link to="home" >Home</Link>
      <Link to="about" >About</Link>
      <Link to="form" >Form</Link>
      <SearchBar onSearch={onSearch}/>
    </nav>
 )
};

export default Nav;
