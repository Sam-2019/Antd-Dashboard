import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Main from "./Main";
import "antd/dist/antd.css";

const uri = process.env.API_URL;

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
