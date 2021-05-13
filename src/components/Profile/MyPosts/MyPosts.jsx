import post from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';





const MyPosts = (props) => {

	let PostElement = props.PostData.PostData.map( function(post){
		return <Post message={post.message} likes={post.likes} />;
	});

	let newPostElement = React.createRef();

	let onButton = () => {
		let Hey = newPostElement.current.value;
		props.addPost(Hey);
		newPostElement.current.value = '';
	};

	let onPostChange = () => {
		props.updatePost(newPostElement.current.value);
	};

	return (
		<div>
			My posts
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.PostData.newPostText} />
				<button onClick={ onButton }>Add post</button>
			</div>
			<div>
				All posts
            {PostElement}

			</div>
		</div>
	)
}

export default MyPosts;