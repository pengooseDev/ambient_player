import { BrowserRouter, Routes, Route } from "react-router-dom";
import Libarary from "./Components/Libarary";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Libarary />}></Route>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
