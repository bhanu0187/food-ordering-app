import { Footer, Header, Hero } from "@/components/LandingPage/index.js";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<Hero />

			<div className='container mx-auto flex-1 py-10'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
