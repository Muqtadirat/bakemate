import { Card } from "@radix-ui/themes";
import { TrendingDown, TrendingUp } from "lucide-react";

const KPICard = ({ title, value, icon, trend, increase }) => {
  return (
    <Card color="blue" className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="h-fit p-1">{icon}</div>
        <div className="flex flex-col gap-2 items-center">
          <p>{title}</p>
          <p className="font-medium text-2xl">{value}%</p>
        </div>

        <div
          className={`${
            increase ? "text-[#5ce23a]" : "text-[red]"
          } flex items-center`}
        >
          {trend}%
          <span className="ml-1">
            {increase ? (
              <TrendingUp height={16} />
            ) : (
              <TrendingDown height={16} />
            )}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;
