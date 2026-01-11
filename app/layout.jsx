import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  title: {
    default: "CTDOCS",
    template: "%s | CTDOCS",
  },
};

const navbar = (
  <Navbar
    logo={<b>CTDOCS</b>}
    projectLink="https://github.com/teerakan-otk/ctdocs.git"
  />
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: false }}
          editLink={null}
          navigation={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
