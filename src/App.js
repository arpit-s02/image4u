import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Results from "./components/pages/Results/Results";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/results" element={<Results />} />
        <Route path = "/" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
