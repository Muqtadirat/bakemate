import { Switch } from "@radix-ui/themes";

const Notifcation = () => {
  const controls = [
    {
      title: "Order Notification",
      subTitle: "Instant notification when a new order is placed.",
    },
    {
      title: "New customer registration",
      subTitle: "Instant notification when a new customer signs up.",
    },
    {
      title: "Customer feedback",
      subTitle: "Alert for new customer review.",
    },
    {
      title: "Low stock reminder",
      subTitle:
        "Alerts when inventory levels for specific products fall below a predetermined threshold..",
    },
  ];

  return (
    <div>
      {controls.map((control) => {
        return (
          <div className="flex items-center justify-between mb-5 bg-white border-2 border-[#E8E8E8] pb-5 pt-[35px] pl-10 pr-[70px]" key={control.title}>
            <div>
              <p className="text-lg font-medium">{control.title}</p>
              <p className="text-black/50">{control.subTitle}</p>
            </div>

            <Switch size="3" variant="classic" color="brown" />
          </div>
        );
      })}
    </div>
  );
};

export default Notifcation;
