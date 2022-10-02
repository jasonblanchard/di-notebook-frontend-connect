import React, { createContext } from "react";
import {
  createConnectTransport,
  createPromiseClient,
  PromiseClient,
} from "@bufbuild/connect-web";

import { NotebookService } from "gen/notebook/v1/notebook_connectweb";

const transport = createConnectTransport({
  baseUrl: "/",
});

const connectClient = createPromiseClient(NotebookService, transport);

export const ConnectServiceProviderContext =
  createContext<PromiseClient<typeof NotebookService>>(connectClient);

interface ConnectServiceProviderProps {
  children: React.ReactNode;
}

const ConnectServiceProvider: React.FC<ConnectServiceProviderProps> = ({
  children,
}) => {
  return (
    <ConnectServiceProviderContext.Provider value={connectClient}>
      {children}
    </ConnectServiceProviderContext.Provider>
  );
};

export default ConnectServiceProvider;
