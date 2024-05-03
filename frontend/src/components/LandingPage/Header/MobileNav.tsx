import { Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
	const { loginWithRedirect, isAuthenticated, user } = useAuth0();

	return (
		<Sheet>
			<SheetTrigger>
				<Menu className='text-green-800' />
			</SheetTrigger>
			<SheetContent className='space-y-3'>
				<SheetTitle>
					{isAuthenticated ? (
						<div className='flex flex-col gap-y-2'>
							<span className='flex items-center font-bold gap-2 text-orange-500'>
								<img
									src={user?.picture}
									alt='profile'
									className='rounded-full w-7 h-7 object-fill'
								/>
								{user?.name || user?.nickname}
							</span>
							<span className='text-green-900'>{user?.email}</span>
						</div>
					) : (
						<span>Welcome to SavourSquad!</span>
					)}
				</SheetTitle>
				<Separator />
				<SheetDescription className='flex flex-col gap-4'>
					{isAuthenticated ? (
						<MobileNavLinks />
					) : (
						<Button
							className='flex-1 font-bold bg-green-800'
							onClick={async () => await loginWithRedirect()}
						>
							Log In
						</Button>
					)}
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
