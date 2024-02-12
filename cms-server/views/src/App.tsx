import "./styles/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import RouterGaurd from "./core/routerGaurd";
import Home from "./pages/Home";
import { GlobalErrorToaster } from "./components/GlobalErrorToaster/GlobalErrorToaster";

const App = () => {
  return (
    <>
      <GlobalErrorToaster />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route element={<RouterGaurd />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
