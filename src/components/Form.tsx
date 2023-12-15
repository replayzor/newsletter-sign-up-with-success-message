import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
	email: string;
};

type FormProps = {
	setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

function Form({ setIsSubmitted }: FormProps) {
	const {
		register,
		resetField,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		if (!errors.email) resetField("email");
		setIsSubmitted(true);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="pl-0 mt-10">
			<label className="flex justify-between text-xs font-semibold text-neutral-darkSlateGrey">
				Email address
				{errors.email && (
					<p className="pr-10 text-red-600">{errors.email.message}</p>
				)}
			</label>
			<input
				className={`w-[90%] border-2 mt-2 mb-6 py-4 px-6 rounded-lg ${
					errors.email ? "border-red-300 bg-red-100 text-red-500" : ""
				}`}
				type="email"
				{...register("email", {
					required: "Email address is required",
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: "Valid email required",
					},
				})}
				placeholder="email@company.com"
			/>

			<button
				type="submit"
				className="w-[90%] hover:bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg py-4 mb-10 bg-neutral-darkSlateGrey text-white"
			>
				Subscribe to monthly newsletter
			</button>
		</form>
	);
}
export default Form;
