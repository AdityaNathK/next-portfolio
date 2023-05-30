import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script
                    src="https:/kit.fontawesome.com/a076d05399.js"
                    defer
                ></script>
            </Head>
            <body>
                <div className="main"></div>
                <div className="gradient" />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
