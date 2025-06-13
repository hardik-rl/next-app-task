import "../css/font.css";
import "../css/common.css";
import "../css/style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
