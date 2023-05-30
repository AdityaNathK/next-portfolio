import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <div className="main"></div>
                <div className="gradient" />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
