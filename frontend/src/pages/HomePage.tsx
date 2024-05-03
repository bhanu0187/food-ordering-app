import landingImage from "@/assets/landing.png";
import appDownloadImage from "@/assets/appDownload.png";

const HomePage = () => {
	return (
		<div className='flex flex-col gap-12'>
			<div className='bg-white rounded-lg hover:shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
				<h1 className='text-5xl font-bold tracking-tight text-green-800'>
					SavourSquad: Your Global Gastronomic Gateway
				</h1>
				<span className='text-xl'>
					"From kitchen to doorstep, savor the flavor without stepping out the
					door."
				</span>
			</div>
			<div className='grid md:grid-cols-2 gap-5'>
				<img
					src={landingImage}
					alt='landing-image'
				/>
				<div className='flex flex-col items-center justify-center gap-4 text-center'>
					<span className='font-bold text-3xl tracking-tighter'>
						Order takeaway even faster!
					</span>
					<span>
						Download SavourSquad App for faster ordering and personalised
						recommendations
					</span>
					<img
						src={appDownloadImage}
						alt='appDownloadImage'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
