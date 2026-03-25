import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function App() {
    return (
        <>
        <Navbar />
        <main>
            <HeroSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
        </main>
        </>
    )
}