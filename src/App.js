import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPosts from './components/AllPosts'
import CurrentPost from './components/CurrentPost/CurrentPost';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/posts" exact element={<AllPosts />} />
              </Routes>
              <Routes>
                  <Route
                      path="/posts/:postId"
                      exact
                      element={<CurrentPost />}
                  />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
