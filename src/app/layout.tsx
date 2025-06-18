
import "./globals.css";
import Providers from "@/components/Providers";
import { TranslationProvider } from "@/hooks/useTranslation";

export const metadata = {
  title: "Haingonirina Portfolio",
  description: "Portfolio de Haingonirina",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <TranslationProvider>
    <Providers>{children}</Providers>
    </TranslationProvider>
    </body>
    </html>
  );
}
