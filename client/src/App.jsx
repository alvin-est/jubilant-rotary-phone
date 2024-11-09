import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import Apollo Client
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';

function App() {
  return (
    // <ApolloProvider> provides the Apollo Client instance to all components in the app through React's context, allowing interaction with the GraphQL server. 
    // This allows all child components to have access to the Apollo Client context, enabling them to use hooks like useQuery, useMutation to work with the GraphQL API.
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
