import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Main from "./Main";
import { host } from "./utils/firebaseConfig";
import "antd/dist/antd.css";

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
