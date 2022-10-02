import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sound from "./components/Sound";
import routeData from "./routeData";

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Nav />
            <Routes>
                {routeData.map(({ name, path, img, sound }, i) => {
                    return (
                        <Route
                            path={path}
                            element={
                                <Sound
                                    name={name}
                                    path={path}
                                    img={img}
                                    sound={sound}
                                />
                            }
                            key={i}
                        ></Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
};

// SoundSrc가 한 번에 넘어오면 비효율적. 최적화를 위해 lazyLoading 사용.
// https://jforj.tistory.com/163

export default App;
