import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import EnglishTutoringPage from './pages/EnglishTutoringPage';
import CleanupPage from './pages/CleanupPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/english-tutoring',
        element: <EnglishTutoringPage />,
      },
      {
        path: '/cleanup',
        element: <CleanupPage />,
      },
    ],
  },
]);
