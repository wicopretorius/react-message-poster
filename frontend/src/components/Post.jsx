import { Link } from 'react-router-dom';
import classes from'./Post.module.css'; // Assuming you have a CSS file for styling

const Post = (props) =>{
    return (
        <li className={classes.post}>
            <Link to={'/posts/'+props.id}>
                <p className={classes.author}>{props.author}</p>
                <h2 className={classes.text}>{props.body}</h2>
            </Link>
        </li>
    );   
}

export default Post;

