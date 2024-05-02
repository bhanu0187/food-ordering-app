import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import AppRoutes from "./AppRoutes";
import Auth0NavigationProvider from "@/auth/Auth0NavigationProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<Auth0NavigationProvider>
				<AppRoutes />
			</Auth0NavigationProvider>
		</Router>
	</React.StrictMode>
);
