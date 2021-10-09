import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Main from "./Main";
import "antd/dist/antd.css";
import {host } from '../firebaseConfig'

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: host,
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
