import React from "react";
//import { useParams } from "react-router-dom";
//import { getSurvivorsData } from "../services/FetchData";
import CardsSurvivors from "../components/CardsSurvivors";
import { SURVIVORS_DATA } from "../data/survivors";

const Home = () => {
  /*const { id } = useParams();
  const [survivorData, setSurvivorData] = useState([]);
  useEffect(() => {
    const fetchSurvivorData = async () => {
      const res = await getSurvivorsData();
      setSurvivorData(res.data);
    };
    fetchSurvivorData();
  }, []);
  console.log(survivorData);*/
  return (
    <div className="body">
      <div className="container_home">
        <h2>Survivants</h2>
        <CardsSurvivors survivorsInfos={SURVIVORS_DATA} />
      </div>
    </div>
  );
};

export default Home;
