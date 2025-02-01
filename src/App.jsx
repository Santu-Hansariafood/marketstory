import React from "react";
import Welcome from "./pages/Welcome/Welcome";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import Page5 from "./pages/Page5/Page5";
import Page6 from "./pages/Page6/Page6";
import Page7 from "./pages/Page7/Page7";
import Page8 from "./pages/Page8/Page8";
import Page9 from "./pages/Page9/Page9";
import Page51 from "./pages/Page5/Page51";
import Header from "./common/Header/Header";
import Page10 from "./pages/Page10/Page10";
import ScrollToTop from "./common/ScrollToTop/ScrollToTop";
import RabiCorn from "./pages/RabiCorn/RabiCorn";
import RainfallPage from "./pages/RainfallPage/RainfallPage";
import DrySpellPage from "./pages/DrySpellPage/DrySpellPage";
import ONDRainfallPage from "./pages/ONDRainfallPage/ONDRainfallPage";
import RainfallChart from "./pages/RainfallChart/RainfallChart";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="">
        <section className="w-full bg-cover bg-center pt-20" style={{ backgroundImage: "url('/path-to-welcome-bg.jpg')" }}>
          <Welcome />
        </section>

        <section className="w-full bg-cover bg-center py-5" style={{ backgroundImage: "url('/path-to-page1-bg.jpg')" }}>
          <Page1 />
        </section>

        <section className="w-full bg-cover bg-center py-5" style={{ backgroundImage: "url('/path-to-page2-bg.jpg')" }}>
          <Page2 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page3-bg.jpg')" }}>
          <Page3 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page4-bg.jpg')" }}>
          <Page4 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page5-bg.jpg')" }}>
          <Page5 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page5-bg.jpg')" }}>
          <Page51 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page6-bg.jpg')" }}>
          <Page6 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page7-bg.jpg')" }}>
          <Page7 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page8-bg.jpg')" }}>
          <Page8 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page9-bg.jpg')" }}>
          <Page9 />
        </section>

        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <Page10 />
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <RabiCorn/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <RainfallPage/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <DrySpellPage/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <ONDRainfallPage/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <RainfallChart/>
        </section>
        
      </div>
      
      <ScrollToTop />
    </div>
  );
};

export default App;
