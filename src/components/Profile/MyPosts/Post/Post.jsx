import post from "./Post.module.css";



const Post = (props) => {
	return (
		<div className={post.item}>
			<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" alt="" />
			{props.message}
			<p>Likes: {props.likes}</p>
		</div>
	)
}

export default Post;