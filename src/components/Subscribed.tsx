type Props = {
	setIsSubmitted: (value: boolean) => void;
	email: string;
};

function Subscribed({ setIsSubmitted, email }: Props) {
	return (
		<section className="w-[375px] md:px-9 md:w-[460px] md:rounded-3xl md:flex-col md:flex bg-white">
			<div className="">
				<img
					src="/images/icon-success.svg"
					alt="Success icon"
					className="pt-40 pl-6 md:pt-8"
				/>
			</div>
			<h1 className="pt-10 pl-6 text-4xl font-extrabold md:text-5xl text-neutral-darkSlateGrey">
				Thanks for subscribing!
			</h1>
			<p className="pt-6 pb-64 pl-6 font-medium md:pb-10 text-neutral-darkSlateGrey">
				A confirmation email has been sent to{" "}
				<span className="font-semibold text-neutral-darkSlateGrey">
					{email}
				</span>{" "}
				Please open it and click the button inside to confirm your subscription.
			</p>
			<div className="flex items-center justify-center md:pb-4">
				<button
					onClick={() => setIsSubmitted(false)}
					type="button"
					className="w-[90%] hover:bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg py-4 mb-10 bg-neutral-darkSlateGrey text-white"
				>
					Dismiss message
				</button>
			</div>
		</section>
	);
}
export default Subscribed;
