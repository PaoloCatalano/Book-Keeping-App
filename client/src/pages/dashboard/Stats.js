import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import {
  StatsContainer,
  Loading,
  ChartsContainer,
  StatsContainerMonthly,
  Skeleton,
} from "../../components";

const Stats = () => {
  const { showStats, showStatsAlt, isLoading, monthlyApplications } =
    useAppContext();

  useEffect(() => {
    showStats();
    showStatsAlt();
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      {monthlyApplications.length > 0 ? (
        <div>
          <StatsContainerMonthly />
          <ChartsContainer />
          <StatsContainer />
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default Stats;
