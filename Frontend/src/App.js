// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './Context';
import PostList from './PostList';
import CreatePost from './CreatePost';
import About from './About';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header>
            <h1>Blog Application</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;