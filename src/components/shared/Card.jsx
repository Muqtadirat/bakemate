import { Card } from "@radix-ui/themes";
import { LineChart, ArrowUpIcon } from "lucide-react";

const KPICard = ({ title, value }) => {
  return (
    <Card color="blue" className="w-64 h-24">
      <div className="flex gap-8 items-center">
        <div className="bg-primary-400 h-fit p-1">
          <LineChart color="white" />
        </div>
        <div className="flex flex-col items-center gap-2 grow">
          <p>{title}</p>
          <p className="font-medium text-4xl">{value}</p>
        </div>

        <div className="text-green-500 flex">
          24% <ArrowUpIcon strokeWidth={1} />
        </div>
      </div>
    </Card>
  );
};

export default KPICard;
