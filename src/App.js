import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element= {<HomePage/>}></Route>
      <Route path ="/dashboard" element= {<DashboardPage/>}></Route>
      <Route path = "/courses/:courseId" element = {<DetailsPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
