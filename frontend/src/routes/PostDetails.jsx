// import { useLoaderData, Link } from 'react-router-dom';

// import Modal from '../components/Modal';
// import classes from './PostDetails.module.css';

// function PostDetails() {
//   const post = useLoaderData();

//   if (!post) {
//     return (
//       <Modal>
//         <main className={classes.details}>
//           <h1>Could not find post</h1>
//           <p>Unfortunately, the requested post could not be found.</p>
//           <p>
//             <Link to=".." className={classes.btn}>
//               Okay
//             </Link>
//           </p>
//         </main>
//       </Modal>
//     );
//   }
//   return (
//     <Modal>
//       <main className={classes.details}>
//         <p className={classes.author}>{post.author}</p>
//         <p className={classes.text}>{post.body}</p>
//       </main>
//     </Modal>
//   );
// }

// export default PostDetails;

// export async function loader({params}) {
//     const response = await fetch('http://localhost:8080/posts/' + params.id);
//     const resData = await response.json();
//     return resData.post;
// }

import { useLoaderData, Link, useNavigate, useRevalidator } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();
  const revalidator = useRevalidator()

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this post?');
    if (!confirm) return;

    const response = await fetch('http://localhost:8080/posts/' + post.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    
    if (response.ok) {
      //alert('Post deleted successfully.');
      revalidator.revalidate();
      navigate('/'); // Or navigate('/posts') depending on your routing
    } else {
      alert('Failed to delete the post.');
    }
  };

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
        <div className={classes.actions}>
          <button onClick={handleDelete} className={classes.btnDanger}>Delete</button>
        </div>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch('http://localhost:8080/posts/' + params.id);
  const resData = await response.json();
  return resData.post;
}
