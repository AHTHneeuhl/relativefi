import { TreadingAssets } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TreadingAssets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
