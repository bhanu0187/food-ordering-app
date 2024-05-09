import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import AppRoutes from "./AppRoutes";
import Auth0NavigationProvider from "@/auth/Auth0NavigationProvider";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={queryClient}>
				<Auth0NavigationProvider>
					<AppRoutes />
				</Auth0NavigationProvider>
			</QueryClientProvider>
		</Router>
	</React.StrictMode>
);
