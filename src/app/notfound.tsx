import { Link } from "rasengan";

export default function NotFound() {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<h1>404 - Page Not Found</h1>
			<Link to='/'>Go to Home</Link>
		</div>
	);
}
