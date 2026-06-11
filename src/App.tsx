import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Education from "@/pages/Education";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition variant="fade">
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition variant="left">
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition variant="bottom">
                  <Experience />
                </PageTransition>
              }
            />
            <Route
              path="/education"
              element={
                <PageTransition variant="right">
                  <Education />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition variant="bottom">
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition variant="bottom">
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
