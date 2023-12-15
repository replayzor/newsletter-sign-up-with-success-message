// react imports
import { useState } from "react";

// components
import Footer from "./components/Footer";
import Form from "./components/Form";
import Subscribed from "./components/Subscribed";
import ProductList from "./components/ProductList";

function App() {
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	return (
		<main className="flex flex-col items-center justify-center h-screen bg-neutral-charcoalGrey font-roboto">
			{isSubmitted ? (
				<Subscribed setIsSubmitted={setIsSubmitted} />
			) : (
				<section className="w-[375px] md:rounded-3xl md:w-[900px] md:flex-row-reverse md:flex bg-white">
					<img
						src="/images/illustration-sign-up-mobile.svg"
						alt="Mobile Illustration"
						className="md:hidden"
					/>
					<img
						src="/images/illustration-sign-up-desktop.svg"
						alt="Desktop Illustration"
						className="hidden py-5 pr-5 md:block"
					/>
					<div className="pt-8 pl-6 md:w-[90%] md:px-10 md:flex md:flex-col md:justify-center">
						<h1 className="pb-6 text-4xl font-bold md:text-6xl text-neutral-darkSlateGrey">
							Stay updated!
						</h1>
						<h2 className="pb-6 text-neutral-charcoalGrey">
							Join 60,000+ product managers receiving monthly updates on:
						</h2>
						<ProductList />
						<Form setIsSubmitted={setIsSubmitted} />
					</div>
				</section>
			)}
			<Footer />
		</main>
	);
}

export default App;
