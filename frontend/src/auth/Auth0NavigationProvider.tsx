import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0NavigationProps = {
	children: React.ReactNode;
};

const Auth0NavigationProvider = ({ children }: Auth0NavigationProps) => {
	const domain = import.meta.env.VITE_AUTH0_DOMAIN;
	const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
	const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

	const navigate = useNavigate();

	if (!domain || !clientId || !redirectUri) {
		throw new Error("Unable to Initialize Auth");
	}

	function onRedirectCallback() {
		navigate("/auth-callback");
	}

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUri,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0NavigationProvider;
