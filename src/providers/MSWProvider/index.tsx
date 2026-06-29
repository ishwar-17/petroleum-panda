"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { createWorker as createWorkerBrowser } from "@/src/mock/browser";

export type MSWProviderProps = {
  children: ReactNode;
};

const MSWProvider: FC<MSWProviderProps> = ({ children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    async function initMocks() {
      if (process.env.NEXT_PUBLIC_API_MOCKING !== "enabled") {
        return;
      }

      const createWorker = await createWorkerBrowser;
      const worker = createWorker();

      await worker.start({
        onUnhandledRequest: "bypass",
      });

      setReady(true);
    }

    initMocks();
  }, []);

  if (!ready) {
    return null;
  }

  return <>{children}</>;
};
export default MSWProvider;
