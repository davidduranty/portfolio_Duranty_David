import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import ArrowFixed from "./components/BackToTop/ArrowFixed";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ArrowFixed />
      <Footer />
    </>
  );
}

export default App;
