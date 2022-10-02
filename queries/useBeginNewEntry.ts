import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ConnectServiceProviderContext } from "./ConnectServiceProvider";

export default function useBeginNewEntry() {
  const client = useContext(ConnectServiceProviderContext);
  const queryClient = useQueryClient();

  let token = "";
  if (global.window) {
    token = localStorage.getItem("idToken");
  }
  return useMutation<any, any, { text: string }>(
    ["beginNewEntry"],
    ({ text }) =>
      client.beginNewEntry(
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["ListEntries"]);
      },
    }
  );
}
