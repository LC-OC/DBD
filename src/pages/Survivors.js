import React from "react";
import CardsSurvivors from "../components/CardsSurvivors";
import Header from "../components/Header";
import { SURVIVORS_DATA } from "../data/survivors";

const Survivors = () => {
  return (
    <div>
      <Header />
      <div className="container_cards_page">
        <CardsSurvivors survivorsInfos={SURVIVORS_DATA} />
      </div>
    </div>
  );
};

export default Survivors;
