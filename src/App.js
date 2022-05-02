import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllPosts from './components/AllPosts'
import CurrentPost from './components/CurrentPost/CurrentPost';

function App() {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="/posts" exact element={<AllPosts />} />
                    <Route
                        path="/posts/:postId"
                        exact
                        element={<CurrentPost />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/posts" replace />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
