import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { PageComponent } from "rasengan";

const Home: PageComponent = () => {
	return (
		<section className='w-full h-screen flex flex-col items-center justify-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-raleway'>
			<p className="text-foreground text-2xl font-bold">Bootcamp Waitlist</p>

			<Input placeholder="Enter your email" className="w-[300px] mt-8" />
			<Button className="mt-4 rounded-md px-8 w-[300px]">Join</Button>
		</section>
	);
};
	
Home.path = "/";
Home.metadata = {
	title: "Bootcamp Waitlist",
	description: "Keep track of newest updates from bootcamp",
};

export default Home;
