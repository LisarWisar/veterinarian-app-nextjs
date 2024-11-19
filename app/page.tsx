import Navbar from "./ui/landing-page/navbar";
import Footer from "./ui/landing-page/footer";
import LandingPageContent from "./ui/landing-page/landing-page-content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <LandingPageContent />
      <Footer />
    </main>
  );
}
