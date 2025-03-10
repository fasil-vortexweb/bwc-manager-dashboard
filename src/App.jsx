import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters/FiltersModule";
import Content from "./components/Content";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import MultiPieChart from "./components/PieCharts/MultiCharts";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import AllLeads from "./Pages/AllLeads";

const LeadsResolver = () => {
  const [searchParams] = useSearchParams();
  const tabName = searchParams.get("tabName");

  // console.log("tab", tabName); // Log the id value to debug what it returns

  if (!tabName) {
    return (
      <>
        <AllLeads />
      </>
    );
  }

  return (
    <>
      <AllLeads tabName={tabName} />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="m-0 p-0 flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />

          <Routes>
            <Route
              path="/home"
              element={
                <>
                  {/* <div className="p-4 m-4">
                    <Filters />
                  </div> */}
                  <Content />
                  {/* <Tasks /> */}
                </>
              }
            />
            <Route path="/allleads" element={<LeadsResolver />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
