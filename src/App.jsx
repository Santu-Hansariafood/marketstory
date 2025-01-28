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
import ScrollToTop from "./common/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-20">
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-welcome-bg.jpg')" }}
        >
          <Welcome />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page1-bg.jpg')" }}
        >
          <Page1 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page2-bg.jpg')" }}
        >
          <Page2 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page3-bg.jpg')" }}
        >
          <Page3 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page4-bg.jpg')" }}
        >
          <Page4 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page5-bg.jpg')" }}
        >
          <Page5 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page5-bg.jpg')" }}
        >
          <Page51 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page6-bg.jpg')" }}
        >
          <Page6 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page7-bg.jpg')" }}
        >
          <Page7 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page8-bg.jpg')" }}
        >
          <Page8 />
        </div>
        <div
          className="h-screen w-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-page8-bg.jpg')" }}
        >
          <Page9 />
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
