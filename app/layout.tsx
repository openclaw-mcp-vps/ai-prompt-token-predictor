import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Token Predictor — Know Your Costs Before You Send",
  description: "Predict exact token count and cost across OpenAI, Anthropic, and more before executing your prompts. Built for AI product developers and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="535b790a-3ae6-41b6-bb18-f968d813808f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
