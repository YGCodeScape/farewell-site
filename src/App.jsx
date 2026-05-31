import { useState } from "react";
import Hero from "./components/Hero";
import TeachersGrid from "./components/TeachersGrid";
import OpenLetter from "./components/OpenLetter";
import Footer from "./components/Footer";
import TeacherPage from "./components/TeacherPage";
import Petals from "./components/Petals";

export default function App() {
  const [activePage, setActivePage] = useState(null);
  const [petalTrigger, setPetalTrigger] = useState(0);

  const handleOpen = (id) => {
    setActivePage(id);
    setPetalTrigger((n) => n + 1);
  };

  const handleClose = () => setActivePage(null);

  return (
    <>
      <Petals trigger={petalTrigger} />
      <Hero />
      <TeachersGrid onOpen={handleOpen} />
      <OpenLetter />
      <Footer />
      <TeacherPage activeId={activePage} onClose={handleClose} />
    </>
  );
}