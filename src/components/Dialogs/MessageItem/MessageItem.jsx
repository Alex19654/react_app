import dialog from "./../Dialogs.module.css";

const MessageItem = (props) => {
	return (
		<div className={dialog.message}>
			{props.message}
		</div>
	)
}

export default MessageItem;