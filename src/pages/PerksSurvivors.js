import React, { useState } from "react";
import Header from "../components/Header";
import { SURVIVORS_DATA } from "../data/survivors";

const PerksSurvivors = () => {
  const [perk, setPerk] = useState();
  const generate = () => {
    const perk = Math.floor(Math.random() * SURVIVORS_DATA.length);
    setPerk(perk);
  };
  return (
    <div>
      <Header />
      <main>
        <button onClick={generate}>Click click</button>
        <p>{SURVIVORS_DATA[perk] && SURVIVORS_DATA[perk].name}</p>
        <p>{SURVIVORS_DATA[perk] && SURVIVORS_DATA[perk].name}</p>
        <p>{SURVIVORS_DATA[perk] && SURVIVORS_DATA[perk].name}</p>
        <p>{SURVIVORS_DATA[perk] && SURVIVORS_DATA[perk].name}</p>
      </main>
    </div>
  );
};

export default PerksSurvivors;
