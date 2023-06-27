import "@/src/styles/globals.css";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "Aditya Nath | Portfolio",
    description: "Welcome to Aditya Nath's Portfolio",
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${rajdhani.className}`}>{children}</body>
        </html>
    );
}
