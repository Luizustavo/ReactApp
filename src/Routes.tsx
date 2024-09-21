import {
    BrowserRouter as Router,
    Route,
    Routes as ReactRoutes,
  } from "react-router-dom";
  import HomePage from "./components/home-page";

  
  function Routes() {
    return (
      <Router>
        <ReactRoutes>
          <Route path="/" element={<HomePage />} />
          {/* 
          <Route path="/teste" element={<TestPage />} />
          
          <Route path="/newCollect" element={<NewCollectPage />} />
          <Route path="/waste" element={<WastePage />} />
          <Route path="/wasteRegister" element={<WasteRegisterPage />} />
          <Route path="/searchPoint" element={<SearchPointPage />} />
          */}
        </ReactRoutes>
      </Router>
    );
  }
  
  export default Routes;