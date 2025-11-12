// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context';
import PostList from './PostList';
import CreatePost from './CreatePost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header>
            <h1>Blog Application</h1>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">Create Post</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/create" element={<CreatePost />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;