
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

// const client = new ApolloClient({
//   uri: "https://api-eu-west-2.graphcms.com/v2/cl5a6478t6dgl01uk9bzz54km/master"
// });

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new HttpLink({
            uri: 'https://api-eu-west-2.graphcms.com/v2/cl5a6478t6dgl01uk9bzz54km/master',
            credentials: 'same-origin'
        })
    ]),
    cache: new InMemoryCache()
});


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ApolloProvider client={client}>
    <App />
</ApolloProvider>,
);


reportWebVitals();
