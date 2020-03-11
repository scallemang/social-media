import React from 'react';
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const functionsCount = new Set();

function App() {
  const [user, setUser] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = user ? `${user}’s feed` : 'Please log in';
  }, [user]);

  const handleAddPost = React.useCallback( newPost => {
    setPosts( [newPost, ...posts] );
  }, [posts] );

  if (!user) {
    return <Login setUser={ setUser } />
  }
  return <>
    <Header user={user} setUser={ setUser } />
    <CreatePost user={user} handleAddPost={handleAddPost} />
    <PostList posts={posts} />
    <button onClick={ () => setCount(prev => prev + 1) }>{count} +</button>
    
  </>;
}

export default App;