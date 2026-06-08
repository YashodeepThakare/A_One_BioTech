import "./globals.css";

export const metadata = {
  title: "A-One Biotech | Engineering the Future of Green Life",
  description:
    "From advanced plant tissue culture to large-scale mass propagation and green infrastructure, A-One Biotech delivers innovative biotechnology solutions for a sustainable tomorrow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
