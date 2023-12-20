import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
