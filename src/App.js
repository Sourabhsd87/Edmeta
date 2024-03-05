import { useState } from "react";
import Dashboard from "./components/Admin/Dashboard";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import './styles/App.css'
import MainContent from "./components/MainContent";

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content container" >
          <Navbar toggleSidebar={toggleSidebar} />
          <MainContent />
        </div>
      </div>

    </>
  );
}

export default App;
