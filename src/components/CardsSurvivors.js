import React from "react";

const CardsSurvivors = ({ survivorsInfos }) => {
  console.log(survivorsInfos);
  return (
    <div className="container_cards">
      {survivorsInfos.map((survivor) => {
        return (
          <div key={survivor.id} className="card_survivor">
            <div className="wrapper_survivor">
              <img
                src={survivor.img_wraper}
                className="cover-image_survivor"
                alt=""
              />
            </div>
            <img
              src={survivor.img}
              alt={survivor.name}
              className="character_survivor"
            />
            <p className="title_survivor">{survivor.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardsSurvivors;

/* CODE POUR RECUPERER PERKS 
 {survivor.perks.map((perksSurvivor) => {
              return (
                <ul key={perksSurvivor.name_perks}>
                  <li>{perksSurvivor.name_perks}</li>
                  <img src={perksSurvivor.icon_perks} alt="" />
                  <p>{perksSurvivor.description_perks}</p>
                </ul>
              );
            })}*/
