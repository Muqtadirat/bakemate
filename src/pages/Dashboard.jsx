import { useEffect, useState } from "react";
import fetchData from "../lib/api/fetchData";
import { KPIData } from "../lib/constants";
import { KPICard, BarChart } from "../components/shared";

const Dashboard = () => {
  const [KPI, setKPI] = useState([]);

  useEffect(() => {
    async function fetchKPIData() {
      const data = await fetchData();
      if (data) {
        const kpiItems = KPIData.map(
          ({ title, value, trend, increase, icon }) => ({
            title,
            value,
            trend,
            increase,
            icon,
          })
        );
        setKPI(kpiItems);
      }
    }

    fetchKPIData();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-center gap-10">
        {KPI.map((card) => {
          return (
            <KPICard
              key={card.title}
              title={card.title}
              value={card.value}
              trend={card.trend}
              icon={card.icon}
              increase={card.increase}
            />
          );
        })}
      </section>

      <section>
        <BarChart />
      </section>
    </div>
  );
};

export default Dashboard;
