import Navbar from "@/app/components/Navbar";
import type { ReactNode } from "react";




export default function Layout({children}:Readonly<{children:ReactNode}>) {
        return(
            <html>
                <body className="bg-black">
                <main className="font-work-sans">
                <Navbar/>
                {children}
            </main>
                </body>
            </html>
     
        )
}
  
