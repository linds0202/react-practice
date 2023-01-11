import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='post'>
              <Route index element={<NewPost />} />
              <Route path=':id' element={<PostPage />} />
            </Route>
            <Route path='about' element={<About />} />
            <Route path='*' element={<Missing />} />
            
          </Route>

        </Routes>
    </div>
  );
}

export default App;
