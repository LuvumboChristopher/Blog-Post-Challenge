import React , {useState} from "react";
import "./style.css";
import FormPost from './components/FormPost'
import Post from './components/Post'

export default function App() {

  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: Date.now()
  });

  const [showPost, setShowPost] = useState(false)

  return (
    <div>
      <FormPost post={post} setPost={setPost} setShowPost={setShowPost}/>
      {showPost && <Post post={post}/>}
    </div>
  );
}
