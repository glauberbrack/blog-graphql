import { ApolloProvider } from "@apollo/client";

import request from "./api/request";
import Home from "./screens/Home";

const App: React.FC = () => {
  return (
    <ApolloProvider client={request}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
