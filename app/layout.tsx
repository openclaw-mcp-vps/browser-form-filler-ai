import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormFiller AI — AI fills repetitive forms across any website",
  description: "Browser extension with AI-powered form analysis and auto-fill. Built for sales reps, recruiters, and business development professionals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e86f4e64-8244-4b34-9c18-714f8d832b79"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
