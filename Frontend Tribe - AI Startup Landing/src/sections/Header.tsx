"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import LogoIcon from "@/assets/logo.svg";
import Button from "@/components/Button";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(true);

	return (
		<header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
			<div className="absolute inset-0 backdrop-blur md:hidden -z-10"></div>
			<div className="container">
				<div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
					<div>
						<div className="border rounded-lg h-10 w-10 inline-flex justify-center items-center border-white/15">
							<LogoIcon className="h-8 w-8" />
						</div>
					</div>
					<div className="hidden md:block">
						<nav className="flex gap-8 text-sm">
							<Link href="#features" className="text-white/70 hover:text-white transition">
								Features
							</Link>
							<Link href="#developers" className="text-white/70 hover:text-white transition">
								Developers
							</Link>
							<Link href="#pricing" className="text-white/70 hover:text-white transition">
								Pricing
							</Link>
							<Link href="#changelog" className="text-white/70 hover:text-white transition">
								Changelog
							</Link>
						</nav>
					</div>
					<div className="flex gap-4 items-center">
						{/* <div
							className="border rounded-lg h-10 w-10 inline-flex justify-center items-center border-white/15"
							onClick={() => setDarkTheme(!darkTheme)}
						>
							{darkTheme ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
						</div> */}
						<Button title="Join waitlist" />
						<MenuIcon className="md:hidden" />
					</div>
				</div>
			</div>
		</header>
	);
};
