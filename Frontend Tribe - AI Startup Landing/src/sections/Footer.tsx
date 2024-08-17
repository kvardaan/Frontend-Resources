import Logo from "@/assets/logo.svg";
import XScocial from "@/assets/social-x.svg";
import YTScocial from "@/assets/social-youtube.svg";
import InstaScocial from "@/assets/social-instagram.svg";

export const Footer = () => {
	return (
		<footer className="py-5 border-t border-white/15">
			<div className="container">
				<div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
					<div className="flex gap-2 items-center lg:flex-1">
						<Logo className="h-6 w-6" />
						<div className="font-medium">AI Startup Landing Page</div>
					</div>
					<nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
						<a href="#features" className="text-white/70 hover:text-white transition text-xs md:text-sm">
							Features
						</a>
						<a href="#" className="text-white/70 hover:text-white transition text-xs md:text-sm">
							Developers
						</a>
						<a href="#" className="text-white/70 hover:text-white transition text-xs md:text-sm">
							Company
						</a>
						<a href="#" className="text-white/70 hover:text-white transition text-xs md:text-sm">
							Blog
						</a>
						<a href="#" className="text-white/70 hover:text-white transition text-xs md:text-sm">
							Changelog
						</a>
					</nav>
					<div className="flex gap-5 lg:flex-1 lg:justify-end">
						<XScocial className="text-white/40 hover:text-white transition" />
						<InstaScocial className="text-white/40 hover:text-white transition" />
						<YTScocial className="text-white/40 hover:text-wite transition" />
					</div>
				</div>
			</div>
		</footer>
	);
};
