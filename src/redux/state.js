import { renderEntireTree } from "../render";

let state = {
	profilePage: {
		PostData: [
			{ id: "1", message: "How are you?", likes: "5" },
			{ id: "2", message: "Hey!", likes: "577" }
		],
		newPostText: 'it-kamasutra'
		
	},
	messagePage: {
		MessageData: [
			{ message: "How old are you?", id: "1" },
			{ message: "Hello! How are you?", id: "2" },
			{ message: "How old are you?", id: "3" },
			{ message: "Hello! How are you?", id: "4" },
			{ message: "How old are you?", id: "5" },
		],
		DialogData: [
			{ name: "Alex", id: "1" },
			{ name: "Tom", id: "2" },
			{ name: "Jack", id: "3" },
			{ name: "Ron", id: "4" },
			{ name: "Sophie", id: "5" },
		]
	}
	
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likes: 1,
	}
	state.profilePage.PostData.push(newPost);
	renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	renderEntireTree(state);
}


export default state;