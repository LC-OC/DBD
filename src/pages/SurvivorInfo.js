import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { SURVIVORS_DATA } from "../data/survivors";

const SurvivorInfo = () => {
  const { id } = useParams();
  const survivor = SURVIVORS_DATA.find((surv) => surv.id === id);
  console.log(survivor);

  return (
    <div>
      <Header />
      <h2>{survivor.name}</h2>
      <p>{survivor.description}</p>
      <img src={survivor.img} alt="" />
      {survivor.perks.map((perk) => {
        return (
          <ul>
            <img src={perk.icon_perks} alt="" />
            <li>{perk.name_perks}</li>
            <p>{perk.description_perks}</p>
          </ul>
        );
      })}
    </div>
  );
};

export default SurvivorInfo;
