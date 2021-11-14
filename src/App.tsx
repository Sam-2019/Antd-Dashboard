import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Main from "./Main";
import "antd/dist/antd.css";
import { onlinehost, localhost, env } from "./utils/config";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: env === "production" ? onlinehost : localhost,
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
