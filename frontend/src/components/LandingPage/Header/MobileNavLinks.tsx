import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const MobileNavLinks = () => {
	const { logout } = useAuth0();
	return (
		<>
			<Link
				to='/user-profile'
				className='flex bg-white items-center font-bold hover:text-green-900 text-lg'
			>
				User Profile
			</Link>
			<Button
				className='flex items-center px-3 font-bold hover:bg-gray-500'
				onClick={() => logout()}
			>
				Logout
			</Button>
		</>
	);
};

export default MobileNavLinks;
