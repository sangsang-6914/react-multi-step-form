import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Header />
        <Provider store={store}>
          <Outlet />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
