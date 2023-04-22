import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient( {
    defaultOptions: {
        queries: {
            suspense: true,
            refetchOnWindowFocus: false
        }
    }
} );

ReactDOM.createRoot( document.getElementById( "root" ) as HTMLElement ).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
