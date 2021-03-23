import { NavLink } from "react-router-dom";
import dialog from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";






const Dialogs = (props) => {
	
	let DialogElement = props.DialogData.map(function(dialog){
		return <DialogItem name={dialog.name} id={dialog.id} />;
	});
	
	let MessageElement = props.MessageData.map(function(message){
		return <MessageItem message={message.message} id={message.id} />;
	});

	return(
		<div className={dialog.dialogs}>
			<div className={dialog.dialogsItems}>
				{DialogElement}
			</div>
			<div className={dialog.messagesItems}>
				{MessageElement}
			</div>
		</div>
	)
}

export default Dialogs;