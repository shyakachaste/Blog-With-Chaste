import Footer from "@/components/Footer";
import React, { ReactNode } from "react";


export default function layout({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}