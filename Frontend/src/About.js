import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem' }}>
      <h1>About This Blog</h1>
      <p>This is a MERN-stack blog application used for learning and integration exercises.</p>
      <p>It demonstrates a React frontend, an Express backend, and MongoDB for persistence.</p>
      <p>Features include creating posts, uploading images, and user authentication (JWT).</p>
    </div>
  );
};

export default About;
