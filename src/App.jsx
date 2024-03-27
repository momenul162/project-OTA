import NavBar from "./Home/nav-bar/NavBar.jsx";
import Banner from "./Home/banner/Banner";
import About from "./Home/about/About.jsx";
import Services from "./services/Services.jsx";
import Pricing from "./pricing/Pricing.jsx";
import Technology from "./Home/technology/Technology.jsx";
import Partner from "./Home/partnership/Partner.jsx";
import Subscribe from "./Home/subscribe/Subscribe.jsx";
import Footer from "./Home/footer/Footer.jsx";
import Testmonial from "./Home/testmonial/Testmonial.jsx";

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-[#000000] via-[#0e3f5a]  to-[#000000]">
      <NavBar />
      <Banner />
      <About />
      <Services />
      <Pricing />
      <Testmonial />
      <Technology />
      <Partner />

      <Footer />
    </div>
  );
};

export default App;
