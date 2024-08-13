import { Raleway } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Raleway({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: "NextShop",
  description: "Next Dynamic SEO Friendly E-Commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        {children}
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
          showAtBottom={false}
        />
      </body>
    </html>
  );
}
