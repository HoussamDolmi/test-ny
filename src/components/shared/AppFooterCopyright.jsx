function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://www.linkedin.com/in/dolmi-houssam-07565619b/"
					target="__blank"
					className="hover:underline hover:text-orange-600 dark:hover:text-orange-300 ml-1 duration-500"
				>
					Houssam DOLMI
				</a>
				.
				<button
					
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium  hover:underline hover:text-orange-600 dark:hover:text-orange-300 ml-1 duration-500"
				>
					All Right Reserved
				</button>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
