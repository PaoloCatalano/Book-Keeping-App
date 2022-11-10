import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import { FaDice, FaFileInvoiceDollar } from "react-icons/fa";
import { MdFastfood, MdRestaurant } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BsCreditCardFill, BsCashCoin } from "react-icons/bs";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
  const { stats, statsAlt, monthlyApplications } = useAppContext();

  const totalMonths = monthlyApplications.length;

  const defaultStats = [
    {
      title: "food",
      count: stats.food || 0,
      icon: <MdFastfood />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "restaurant",
      count: stats.restaurant || 0,
      icon: <MdRestaurant />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "fun",
      count: stats.fun || 0,
      icon: <FaDice />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
    {
      title: "bills",
      count: stats.bills || 0,
      icon: <FaFileInvoiceDollar />,
      color: "#107181",
      bcg: "#5dbecd",
    },
    {
      title: "others",
      count: stats.others || 0,
      icon: <GiClothes />,
      color: "#168d6a",
      bcg: "#a6e9d5",
    },
  ];

  const defaultStatsAlt = [
    {
      title: "card",
      count: statsAlt.card || 0,
      icon: <BsCreditCardFill />,
      color: "#b69121",
      bcg: "#ffe169",
    },
    {
      title: "cash",
      count: statsAlt.cash || 0,
      icon: <BsCashCoin />,
      color: "#7400CC",
      bcg: "#C599FF",
    },
  ];

  return (
    <>
      <div style={{ marginTop: "3rem" }}>
        <h1>AVERAGE SPENDING</h1>
      </div>

      <Wrapper>
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} total={totalMonths} />;
        })}
        <div style={{ height: 50 }}></div>

        {defaultStatsAlt.map((item, index) => {
          return <StatItem key={index} {...item} total={totalMonths} />;
        })}
      </Wrapper>
    </>
  );
};

export default StatsContainer;
