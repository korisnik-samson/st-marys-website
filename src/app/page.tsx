import Image from "next/image";
import NavigationBar from "@/components/navigation-bar";

export default function Home() {
    return (
        <div className="font-sans min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <NavigationBar />
        </div>
    );
}
