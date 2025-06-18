import Post from "./Post";
import classes from './PostsList.module.css'; // Assuming you have a CSS file for styling
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
    const posts = useLoaderData();

    return (
        <>
            { posts.length === 0 && (
               <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            { posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            body={post.body}
                            author={post.author}
                        />
                    ))}
                </ul>
            )}
        </>   
    );
}
export default PostsList;
