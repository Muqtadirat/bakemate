import { KPICard, BarChart } from "../components/shared";

const Dashboard = () => {
  const KPI = [
    {
      title: "Sales",
      value: 2,
    },
    {
      title: "Customers",
      value: 4,
    },
    {
      title: "Sales",
      value: 2,
    },
    {
      title: "Customers",
      value: 4,
    },
  ];

  return (
    <div>
      <section className="flex justify-center gap-10 border py-5">
        {KPI.map((card) => {
          return (
            <KPICard key={card.title} title={card.title} value={card.value} />
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
