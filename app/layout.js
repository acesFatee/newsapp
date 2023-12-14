import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/Context/Provider";
import Navbar from "@/Components/Navbar";
import { MdMenu } from "react-icons/md";
import Heading from "@/Components/Heading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NewsHub - Your Ultimate Source for Timely and Relevant News",
  description:
    "Stay informed with the latest news from around the globe. Customizable, real-time updates on politics, technology, business, entertainment, and more.",
  author: "Harkaran Sohal",
  keywords: "news, current events, breaking news, world news",
  icons: {
    icon: "/news.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html data-theme="dark" lang="en">
        <body className={inter.className}>
          <div className="flex flex-row sm:gap-10">
            <Navbar />
            <div className="flex w-full flex-col p-4">
              <div className="w-fit">
                <label
                  htmlFor="sidebar-mobile-fixed"
                  className="btn sm:hidden fixed"
                >
                  <MdMenu />
                </label>
              </div>

              <div className="md:my-10 lg:my-10 xl:my-10 my-20">
                <div className="container mx-auto">
                  <Heading />
                  {children}
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
