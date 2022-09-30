import { BrowserRouter, Routes, Route } from "react-router-dom";
import Libarary from "./Components/Pages/Libarary";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Libarary />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
