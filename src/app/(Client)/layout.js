import Footerbar from "@/Components/Footerbar/Footerbar";
import Navbar from "@/Components/Navbar/Navbar";
import Siderbar from "@/Components/Sidebar/Siderbar";
import RootLayout from "../layout";
import "../globals.css";




export default function PagesLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main id="main">
        <div id="container">
          <Siderbar />
          <div id="content">{children}</div>
        </div>
      </main>
      <Footerbar />
    </div>
  );
}
