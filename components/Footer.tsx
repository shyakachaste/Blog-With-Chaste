import React from "react";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	InstagramLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { YoutubeIcon } from "lucide-react";
export default function Footer() {
	return (
		<footer className=" border-t py-10">
			<div className="max-w-7xl py-10 px-5 md:p-0 space-y-5  mx-auto flex justify-between md:items-end flex-col md:flex-row">
				<div className="space-y-10">
					<div className="space-y-2 w-full sm:w-96">
						<h1 className="text-3xl font-bold">Chaste blog</h1>
						<p className="">
                        Discover the coding universe with Shyaka Chaste, a full stack developer. Learn cool tricks,
                         explore hands-on project tutorials, and boost your coding skills. 🚀💻
						</p>
					</div>
					<div className="flex items-center gap-2">
                        <Link href="https://github.com/shyakachaste" target="_blank"><GitHubLogoIcon className="w-5 h-5" /></Link>
                        <Link href="https://www.linkedin.com/in/shyaka-chaste-982a32272/" target="_blank"><LinkedInLogoIcon className="w-5 h-5" /></Link>
                        <Link href="https://www.instagram.com/iamchaste.rw/" target="_blank"><InstagramLogoIcon className="w-5 h-5" /></Link>
                        <Link href="https://www.youtube.com/@lifeofchaste" target="_blank"><YoutubeIcon className="w-5 h-5" /></Link>
					</div>
				</div>

				<h1 className="text-sm">
					&copy; 2024 Shyaka Chaste.All right reserved
				</h1>
			</div>
		</footer>
	);
}