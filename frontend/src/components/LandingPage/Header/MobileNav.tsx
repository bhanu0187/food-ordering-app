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
import { Button } from "../../ui/button";

const MobileNav = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className='text-green-800' />
			</SheetTrigger>
			<SheetContent className='space-y-3'>
				<SheetTitle>Welcome to SavourSquad</SheetTitle>
				<Separator />
				<SheetDescription className='flex'>
					<Button
						className='flex-1 font-bold bg-green-800'
						onClick={async () => await loginWithRedirect()}
					>
						Log In
					</Button>
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
