import { useState, useEffect, useLayoutEffect } from "react";
import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import { FaDice, FaFileInvoiceDollar } from "react-icons/fa";
import { MdFastfood, MdRestaurant } from "react-icons/md";
import { GiClothes, GiCoins } from "react-icons/gi";
import { BsCashCoin, BsCreditCardFill } from "react-icons/bs";

import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
  const { monthlyApplicationsDivided: data } = useAppContext();
  const [index, setIndex] = useState(0);
  const [month, setMonth] = useState(data[0]);

  useEffect(() => {
    setIndex(data.length - 1);
  }, [data]);

  useLayoutEffect(() => {
    setMonth(data[index]);
  }, [data, index]);

  const defaultStats = [
    {
      title: "food",
      count: month?.totalCount.food || 0,
      icon: <MdFastfood />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "restaurant",
      count: month?.totalCount.restaurant || 0,
      icon: <MdRestaurant />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "fun",
      count: month?.totalCount.fun || 0,
      icon: <FaDice />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
    {
      title: "bills",
      count: month?.totalCount.bills || 0,
      icon: <FaFileInvoiceDollar />,
      color: "#107181",
      bcg: "#5dbecd",
    },
    {
      title: "others",
      count: month?.totalCount.others || 0,
      icon: <GiClothes />,
      color: "#168d6a",
      bcg: "#a6e9d5",
    },
    {
      title: "TOTAL",
      count: month?.totalSpending || 0,
      icon: <GiCoins />,
      color: " #3e5154",
      bcg: "#bdc7c9",
    },
  ];

  const defaultStatsAlt = [
    {
      title: "card",
      count: month?.totalCountPerson.card || 0,
      icon: <BsCreditCardFill />,
      color: "#b69121",
      bcg: "#ffe169",
    },
    {
      title: "cash",
      count: month?.totalCountPerson.cash || 0,
      icon: <BsCashCoin />,
      color: "#7400CC",
      bcg: "#C599FF",
    },
  ];

  return (
    <>
      {
        <div className="month-stats">
          <button
            disabled={index <= 0}
            className="btn"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            Prev
          </button>
          {month ? (
            <h1>
              <span>{month.date}</span>
            </h1>
          ) : (
            <h1>DATE</h1>
          )}
          <button
            disabled={index >= data.length - 1}
            className="btn"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      }

      <Wrapper>
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} />;
        })}

        {defaultStatsAlt.map((item, index) => {
          return <StatItem key={index} {...item} />;
        })}
      </Wrapper>
    </>
  );
};

export default StatsContainer;
