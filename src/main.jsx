import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts, { loader as postLoader } from './routes/Posts'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';
import NewPost, { action as newPostAction } from './routes/NewPost';
import './index.css'
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '/', 
        element: <Posts/>, 
        loader: postLoader,
        children: [
          { 
            path: '/create-post', 
            element: <NewPost />,
            action: newPostAction 
          },
          {
            path: '/posts/:id',
            element: <PostDetails />,
            loader: postDetailsLoader
          }
        ] 
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider 
      router={router}
      fallbackElement={<p>Loading route...</p>}  // ✅ Add this
    />
  </React.StrictMode>
)