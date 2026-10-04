import "@/styles.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingActions } from "@/components/floating-actions";
import { Providers } from "./providers";

export const viewport = {
    themeColor: "#0284c7",
};

export const metadata = {
    title: "Lotus Moving | Professional Moving & Relocation Services",
    description:
        "Lotus Moving provides professional moving and relocation services including residential moving, commercial moving, office relocation, furniture moving, and packing and moving solutions.",
    keywords:
        "moving company, professional movers, moving services, house moving, residential moving, commercial moving, office relocation, furniture moving, packing and moving, relocation services",
    authors: [{ name: "Lotus Moving" }],
    creator: "Lotus Moving",
    publisher: "Lotus Moving",
    robots: { index: true, follow: true },
    openGraph: {
        siteName: "Lotus Moving",
        type: "website",
        locale: "en_US",
        url: "https://lotusmoving.com",
        title: "Lotus Moving | Professional Moving & Relocation Services",
        description:
            "Lotus Moving provides professional moving and relocation services including residential moving, commercial moving, office relocation, furniture moving, and packing and moving solutions.",
        images: [
            "/icon.png",
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lotus Moving | Professional Moving & Relocation Services",
        description:
            "Lotus Moving provides professional moving and relocation services including residential moving, commercial moving, office relocation, furniture moving, and packing and moving solutions.",
        images: [
            "/icon.png",
        ],
    },
    icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://api.fontshare.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    rel="stylesheet"
                    href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@500;600;700&display=swap"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MovingCompany",
                            name: "Lotus Moving",
                            url: "https://lotusmoving.com",
                            slogan: "We Move What Matters.",
                            telephone: "+2348137912310",
                            areaServed: "Nigeria",
                            address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
                            sameAs: [
                                "https://instagram.com/LOTUS_MOVING_SERVICES",
                                "https://www.tiktok.com/@lotusmovingservices",
                            ],
                        }),
                    }}
                />
            </head>
            <body>
                <Providers>
                    <div className="flex min-h-screen flex-col bg-background">
                        <SiteHeader />
                        <main className="flex-1">{children}</main>
                        <SiteFooter />
                        <FloatingActions />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
