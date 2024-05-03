import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const UserNameMenu = () => {
	const { user, logout } = useAuth0();

	// Function to determine the user's display name based on priority
	const getUserDisplayName = () => {
		if (user) {
			if (user.given_name) return user.given_name;
			if (user.nickname) return user.nickname;
			if (user.email) return user.email;
		}
		return "User"; // Fallback if user object or its properties are not available
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center px-3 justify-center font-bold hover:text-orange-500 gap-2'>
				{user?.picture ? (
					<img
						src={user?.picture}
						alt='profile'
						className='rounded-full w-7 h-7 object-fill'
					/>
				) : (
					<CircleUserRound className='text-green-900' />
				)}
				{getUserDisplayName()}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link
						to='/user-profile'
						className='font-bold hover:text-orange-500'
					>
						User Profile
					</Link>
				</DropdownMenuItem>
				<Separator />
				<DropdownMenuItem>
					<Button
						className='flex flex-1 font-bold bg-orange-500 text-green-900'
						onClick={() => logout()}
					>
						Log Out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserNameMenu;
