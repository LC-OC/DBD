import { SURVIVORS_DATA } from "../data/survivors";

export const getSurvivorsData = async () => {
  try {
    const res = SURVIVORS_DATA.filter((data) => data);
    console.log(res[0]);
    return {
      data: res,
    };
  } catch (error) {
    console.log("Il y a une erreur, impossible de mocker les données");
  }
};
