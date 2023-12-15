import checkedIcon from "/images/icon-list.svg";

const products = [
	{
		id: 1,
		checked: checkedIcon,
		text: "Product discovery and building what matters",
	},
	{
		id: 2,
		checked: checkedIcon,
		text: "Measuring to ensure updates are a success",
	},
	{
		id: 3,
		checked: checkedIcon,
		text: "And much more!",
	},
];

function ProductList() {
	return (
		<ul className="text-neutral-charcoalGrey text-[16px] w-[90%]">
			{products.map((product) => (
				<li key={product.id} className="flex items-start gap-4 pb-4">
					<img src={product.checked} alt="Checked icon" />
					{product.text}
				</li>
			))}
		</ul>
	);
}
export default ProductList;
