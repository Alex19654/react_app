import { NavLink } from "react-router-dom";
import dialog from "./../Dialogs.module.css";

const DialogItem = (props) => {

	let path = "/Dialogs/" + props.id;

	return (
		<div className={dialog.item}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;