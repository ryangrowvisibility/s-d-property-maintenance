import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "S D Property Maintenance | Snow Removal & Property Care near Port Hope, Northumberland | (905) 376-2922",
  description:
    "All-season property maintenance: snow plowing for long driveways, paving, spring clean-up and grounds care. We come after every storm, no call needed. 5.0 on Google. Call (905) 376-2922.",
  openGraph: {
    title: "S D Property Maintenance | Snow Removal & All-Season Property Care",
    description: "We come after every storm, so you never have to call. Call (905) 376-2922.",
    type: "website",
    images: ["/images/p1.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
