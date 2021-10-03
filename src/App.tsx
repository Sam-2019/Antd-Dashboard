import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import dotenv from "dotenv";
import Main from "./Main";
import "antd/dist/antd.css";

dotenv.config();

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
