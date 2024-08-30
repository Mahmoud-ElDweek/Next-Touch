import Footerbar from "@/Components/Footerbar/Footerbar";
import DashNav from "./DashNav/DashNav";
import RootLayout from "../layout";
import "../globals.css";


export default function DashboardLayout({ children }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <DashNav />
            <div style={{ flex: 1 }}>
                <div id="container" >
                    <div id="content">{children}</div>
                </div>
            </div>
            <Footerbar />
        </div>

    );
}
