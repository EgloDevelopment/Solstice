export default function Navbar() {
	return (
		<div className="sticky top-0 z-50">
			<div className="navbar bg-base-200">
				<div className="navbar-start">
					<a href="https://t.me/EgloDevelopment" target="_blank" className="btn btn-ghost">Contact us</a>
				</div>
				<div className="navbar-center">
					<a className="btn btn-ghost text-xl">Eglo</a>
				</div>
				<div className="navbar-end">
					<input type="checkbox" value="light" className="toggle theme-controller mr-2" />
				</div>
			</div>
		</div>
	);
}
