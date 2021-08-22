import * as React from "react";
import { ContextProvider } from "./src/global-context";

export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
);
