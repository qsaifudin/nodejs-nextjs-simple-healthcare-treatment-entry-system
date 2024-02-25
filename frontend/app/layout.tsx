import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { NavbarComponent } from "./components/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body >
      
        <Providers>
      <NavbarComponent></NavbarComponent>
          {children}
        </Providers>

      </body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       {/* <body className={inter.className}> */}
//       <body >
//         <Providers>
//             <NavbarComponent></NavbarComponent>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }