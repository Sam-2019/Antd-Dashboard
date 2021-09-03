import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Main from "./Main";
import "antd/dist/antd.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
