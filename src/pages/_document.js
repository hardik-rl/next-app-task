import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Your Name or Company" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />

                <meta
                    name="description"
                    content="Default description for Blog App. Read latest blogs and articles."
                />
                <meta
                    name="keywords"
                    content="blog, articles, next.js, homepage"
                />

                <link rel="canonical" href="https://v0-new-project-sccvwp1p3kv-git-uichanges-hardik-rls-projects.vercel.app" />

                <link
                    rel="preload"
                    href="/fonts/Lato-Regular.woff"
                    as="font"
                    type="font/woff"
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
