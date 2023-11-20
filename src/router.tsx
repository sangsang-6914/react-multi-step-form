import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import RequestFormPage from './pages/RequestFormPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/english-tutoring',
        element: <RequestFormPage />,
      },
      {
        path: '/cleanup',
        element: <RequestFormPage />,
      },
    ],
  },
]);
