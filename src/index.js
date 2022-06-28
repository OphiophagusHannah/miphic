
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/cl4qn8mei3zxx01yw7t2u98y4/master"
});


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);


reportWebVitals();