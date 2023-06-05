import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={rajdhani.className}>
            <Component {...pageProps} />;
        </main>
    );
}
