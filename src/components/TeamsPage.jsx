import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";
import TeamCard from "./TeamCard";
import teamsData from "../teamData.json";

const TeamsPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1 className="mt-20 text-center xl:text-4xl text-2xl font-semibold">OUR TEAM</h1>
      <p className="text-center xl:text-base text-sm">Upholding the highest standards is not a choice but a way of life.</p>
      <TeamCard teams={teamsData} />
      <Footer />
    </div>
  );
};

export default TeamsPage;
