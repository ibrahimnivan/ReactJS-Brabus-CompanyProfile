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
      <h1 className="mt-20 text-center text-4xl font-semibold">OUR TEAM</h1>
      <p className="text-center text-base">Upholding the highest standards is not a choice but a way of life.</p>
      <TeamCard teams={teamsData} />
      <Footer />
    </div>
  );
};

export default TeamsPage;
