import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

//layout
import MainLayout from './layouts/MainLayout';
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about/:id',
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
