import { lazy, Suspense } from "react";
import Loading from "./common/Loading/Loading";

const Welcome = lazy(()=> import("./pages/Welcome/Welcome"));
const Page1 = lazy(()=> import("./pages/Page1/Page1"));
const Page2 = lazy(()=> import("./pages/Page2/Page2"));
const Page3 = lazy(()=> import("./pages/Page3/Page3"));
const Page4 = lazy(()=> import("./pages/Page4/Page4"));
const Page5 = lazy(()=> import("./pages/Page5/Page5"));
const Page6 = lazy(()=> import("./pages/Page6/Page6"));
const Page7 = lazy(()=> import("./pages/Page7/Page7"));
const Page8 = lazy(()=> import("./pages/Page8/Page8"));
const Page9 = lazy(()=> import("./pages/Page9/Page9"));
const Page51 = lazy(()=> import("./pages/Page5/Page51"));
const Header = lazy(()=> import("./common/Header/Header"));
const Page10 = lazy(()=> import("./pages/Page10/Page10"));
const ScrollToTop = lazy(()=> import("./common/ScrollToTop/ScrollToTop"));
const RabiCorn = lazy(()=> import("./pages/RabiCorn/RabiCorn"));
const RainfallPage = lazy(()=> import("./pages/RainfallPage/RainfallPage"));
const DrySpellPage = lazy(()=> import("./pages/DrySpellPage/DrySpellPage"));
const ONDRainfallPage = lazy(()=> import("./pages/ONDRainfallPage/ONDRainfallPage"));
const RainfallChart = lazy(()=> import("./pages/RainfallChart/RainfallChart"));
const MoistureStressChart = lazy(()=> import("./pages/MoistureStressChart/MoistureStressChart"));
const MoistureStressChart1 = lazy(()=> import("./pages/MoistureStressChart/MoistureStressChart1"));
const MoistureStressChart2 = lazy(()=> import("./pages/MoistureStressChart/MoistureStressChart2"));
const RabiCornYield = lazy(()=> import("./pages/RabiCornYield/RabiCornYield"));
const CornProductionEstimate = lazy(()=> import("./pages/CornProductionEstimate/CornProductionEstimate"));
const DemandUpdate = lazy(()=> import("./pages/DemandUpdate/DemandUpdate"));
const EthanolBlending = lazy(()=> import("./pages/EthanolBlending/EthanolBlending"));
const EthanolBlending1 = lazy(()=> import("./pages/EthanolBlending/EthanolBlending1"));
const EthanolBlending2 = lazy(()=> import("./pages/EthanolBlending/EthanolBlending2"));
const EthanolBlending3 = lazy(()=> import("./pages/EthanolBlending/EthanolBlending3"));
const EthanolBlending4 = lazy(()=> import("./pages/EthanolBlending/EthanolBlending4"));
const RegionalEthanolDemand = lazy(()=> import("./pages/EthanolBlending/RegionalEthanolDemand"));
const EthanolCapacityChart = lazy(()=> import("./pages/EthanolBlending/EthanolCapacityChart"));
const CornStarchExportChart = lazy(()=> import("./pages/EthanolBlending/CornStarchExportChart"));
const CornStarchExportChart1 = lazy(()=> import("./pages/EthanolBlending/CornStarchExportChart1"));
const Dicelamer = lazy(()=> import("./pages/Dicelamer/Dicelamer"));
const EggExportsDashboard =lazy(()=>import("./pages/EggExportsDashboard/EggExportsDashboard"));
const EggExportsDashboard1 =lazy(()=>import("./pages/EggExportsDashboard/CornEximChart"));
const MaizeMarketComponent =lazy(()=>import("./pages/EggExportsDashboard/MaizeMarketComponent"));
const CornNizamabadForecast =lazy(()=>import("./pages/EggExportsDashboard/CornNizamabadForecast"));
const GlobalCornBalanceSheet =lazy(()=>import("./pages/EggExportsDashboard/GlobalCornBalanceSheet"));

const App = () => {
  return (
    <Suspense fallback={<Loading/>}>
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
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <MoistureStressChart/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <MoistureStressChart1/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <MoistureStressChart2/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <RabiCornYield/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <CornProductionEstimate/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <DemandUpdate/>
          <EthanolBlending/>
          <EthanolBlending1/>
          <EthanolBlending2/>
          <EthanolBlending3/>
          <EthanolBlending4/>
          <RegionalEthanolDemand/>
          <EthanolCapacityChart/>
          <CornStarchExportChart/>
          <CornStarchExportChart1/>
          <EggExportsDashboard/>
          <EggExportsDashboard1/>
          <MaizeMarketComponent/>
          <CornNizamabadForecast/>
          <GlobalCornBalanceSheet/>
        </section>
        <section className="w-full bg-cover bg-center py-20" style={{ backgroundImage: "url('/path-to-page10-bg.jpg')" }}>
          <Dicelamer/>
        </section>
        
        
      </div>
      
      <ScrollToTop />
    </div>
    </Suspense>
  );
};

export default App;
