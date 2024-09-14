import type { Metadata } from "next";

import Footer from "@/layout/footer";

import type { ReactPropsWithChildren } from "@/types/react-types";

import "./globals.css";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Random web experiments",
};

type Props = ReactPropsWithChildren;

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
