import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survivors from "./pages/Survivors";
import Killers from "./pages/Killers";
import PerksSurvivors from "./pages/PerksSurvivors";
import PerksKillers from "./pages/PerksKillers";
import SurvivorInfo from "./pages/SurvivorInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/survivors" element={<Survivors />}></Route>
        <Route path="/perks-survivors" element={<PerksSurvivors />}></Route>
        <Route exact path="/survivors/:id" element={<SurvivorInfo />} />
        <Route path="killers" element={<Killers />}></Route>
        <Route path="/perks-killers" element={<PerksKillers />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
