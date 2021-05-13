import MyPosts from "./MyPosts/MyPosts";
import prof from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

	
	

	return (
		<div className={prof.content}>
			<ProfileInfo />
			<MyPosts PostData={props.PostData} addPost={props.addPost} newPostText={props.newPostText} updatePost = {props.updatePost}/>
		</div>
	)
}

export default Profile;