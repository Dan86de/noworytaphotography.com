import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

export const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
	title: "Noworytaphotography - Katarzyna Noworyta",
	description: "Interior photographer Katarzyna Noworyta",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="de" suppressHydrationWarning>
			<body className={cn("bg-background min-h-screen font-sans antialiased", montserrat.variable)}>
				{children}
			</body>
		</html>
	);
}
