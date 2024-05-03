import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "../../ui/button";
import UserNameMenu from "@/components/UserNameMenu";

const MainNav = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<span className='flex space-x-2 items-center'>
			{isAuthenticated ? (
				<UserNameMenu />
			) : (
				<Button
					className='font-bold hover:text-orange-500 hover:bg-white'
					variant='ghost'
					onClick={() => loginWithRedirect()}
				>
					Log In
				</Button>
			)}
		</span>
	);
};

export default MainNav;
