import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Error from "./components/Error";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries/>}></Route>
        <Route path="/:name" element={<SingleCountry/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
