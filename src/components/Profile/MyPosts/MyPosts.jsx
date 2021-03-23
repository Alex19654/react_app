import post from "./MyPosts.module.css";
import Post from "./Post/Post";





const MyPosts = (props) => {

	let PostElement = props.PostData.map( function(post){
		return <Post message={post.message} likes={post.likes} />;
	});

	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div>
				All posts
            {PostElement}

			</div>
		</div>
	)
}

export default MyPosts;