import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ConfigProvider } from "antd";
import Main from "./Main";
import "antd/dist/antd.css";
import { onlinehost, localhost, env } from "./utils/config";

const httpLink = createHttpLink({
  uri: env === "production" ? onlinehost : localhost,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ConfigProvider>
        <Main />
      </ConfigProvider>
    </ApolloProvider>
  );
}
