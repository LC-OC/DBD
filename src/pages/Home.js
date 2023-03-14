import React from "react";
//import { useParams } from "react-router-dom";
//import { getSurvivorsData } from "../services/FetchData";
import Header from "../components/Header";

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
      <Header />
      <div className="container_home"></div>
    </div>
  );
};

export default Home;
