
import "./globals.css";
import Providers from "@/components/Providers";
import { TranslationProvider } from "@/hooks/useTranslation";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Haingonirina Portfolio",
  description: "Portfolio de Haingonirina",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <TranslationProvider>
    <Providers>
      {children}
      <SpeedInsights />
    </Providers>
    </TranslationProvider>
    </body>
    </html>
  );
}
