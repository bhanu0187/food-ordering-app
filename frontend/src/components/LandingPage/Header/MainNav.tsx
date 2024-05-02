import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "../../ui/button";

const MainNav = () => {
	const { loginWithRedirect, isAuthenticated, user } = useAuth0();
	return (
		<Button
			className='font-bold hover:text-orange-500 hover:bg-white'
			variant='ghost'
			onClick={() => loginWithRedirect()}
		>
			Log In
		</Button>
	);
};

export default MainNav;
