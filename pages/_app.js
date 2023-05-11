import "/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/commons/apollo";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
