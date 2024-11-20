"use client";

import { ReactNode, useEffect } from "react";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin, AppInsightsContext } from "@microsoft/applicationinsights-react-js";

export function AppInsightsProvider({ children }: { children: ReactNode }) {
  const reactPlugin = new ReactPlugin();
  useEffect(() => {
    const appInsights = new ApplicationInsights({
      config: {
        connectionString: process.env.NEXT_PUBLIC_APP_APPLICATIONINSIGHTS_CONNECTION_STRING,
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: {},
        },
      },
    });
    appInsights.loadAppInsights();

    return () => {
      appInsights.unload();
    };
  });

  return <AppInsightsContext.Provider value={reactPlugin}>{children}</AppInsightsContext.Provider>;
}
