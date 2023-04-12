import "/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/commons/apollo";

export default function App({ Component }) {
  return (
    <div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Component />
        </>
      </ApolloSetting>
    </div>
  );
}
