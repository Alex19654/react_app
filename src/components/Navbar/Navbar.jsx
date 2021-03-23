import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink>
			</div>
			<div className={`${classes.item} ${classes.active}`}>
				<NavLink to="/Dialogs" activeClassName={classes.active}>Messages</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/Feed" activeClassName={classes.active}>Feed</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Nav;