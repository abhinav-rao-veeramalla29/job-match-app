import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedJobs from "./components/FeaturedJobs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}

export default App;