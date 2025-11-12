// PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from './Api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.get(`/posts?page=${currentPage}`);
      setPosts(response.data.posts || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Error fetching posts. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts yet. <Link to="/create">Create one!</Link></p>
      ) : (
        posts.map(post => (
          <article key={post._id} className="post-card">
            {post.image && (
              <img 
                src={`http://localhost:5000/uploads/${post.image}`} 
                alt={post.title}
                className="post-image"
              />
            )}
            <div className="post-content">
              <h2>
                <Link to={`/post/${post._id}`}>{post.title}</Link>
              </h2>
              <p className="post-excerpt">{post.excerpt || post.content?.substring(0, 150)}</p>
              <div className="post-meta">
                <span>By {post.author?.username || 'Unknown'}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </article>
        ))
      )}
      
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;