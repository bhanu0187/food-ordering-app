import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className='text-orange-500' />
			</SheetTrigger>
			<SheetContent className='space-y-3'>
				<SheetTitle>Welcome to SavourSquad.com</SheetTitle>
				<Separator />
				<SheetDescription className='flex'>
					<Button className='flex-1 font-bold bg-orange-500'>Log In</Button>
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;