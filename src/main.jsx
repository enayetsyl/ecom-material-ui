import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import { router } from "./Router";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import {
   QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
