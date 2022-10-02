import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { ConnectServiceProviderContext } from "./ConnectServiceProvider";

export default function useGetEntry({ id }: { id?: number }) {
  const client = useContext(ConnectServiceProviderContext);

  let token = "";
  if (global.window) {
    token = localStorage.getItem("idToken");
  }

  return useQuery(
    ["GetQuery", id],
    () =>
      client.readAuthorEntry(
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  );
}
