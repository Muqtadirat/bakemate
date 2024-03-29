import { UseGlobalContext } from "src/contexts/GlobalContext";
import { Avatar, Popover, Separator } from "@radix-ui/themes";
import { EllipsisVertical, PenLine, Trash2 } from "lucide-react";
import { CheckBox, Button } from "src/components/shared";

const ProductsTable = ({
  product,
  category,
  price,
  stock,
  created,
  lastUpdated,
  image,
  checkId,
  deleteProduct,
}) => {
  const { checked, setChecked } = UseGlobalContext();

  const handleCheckboxChange = () => {
    if (checked.includes(checkId)) {
      setChecked(checked.filter((id) => id !== checkId));
    } else {
      setChecked([...checked, checkId]);
    }
  };

  return (
    <div className="grid grid-cols-9 bg-white mb-4 px-4 py-4 items-center">
      <div>
        <CheckBox
          id={checkId}
          onClickHandler={handleCheckboxChange}
          className="w-6 h-6 accent-primary-800 hover:cursor-pointer"
        />
      </div>
      <div className="col-span-2 flex items-center">
        <Avatar radius="full" src={image} />
        <span className="ml-2">{product}</span>
      </div>

      <div>{category}</div>
      <div>#{price}</div>
      <div className={`${stock < 10 ? "text-[red]" : "text-black"}`}>
        {`${stock === 0 ? "--" : stock}`}
      </div>
      <div>{created}</div>
      <div>{lastUpdated}</div>

      <Popover.Root>
        <Popover.Trigger>
          <button>
            <EllipsisVertical />
          </button>
        </Popover.Trigger>

        <Popover.Content className="">
          <div className="flex flex-col items-center w-full">
            <PenLine color="#59150E" size={20} />
            <Separator decorative className="my-2 bg-gray-500 w-10" />
            <Button onClickHandler={deleteProduct}>
              <Trash2 color="#59150E" size={20} />
            </Button>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default ProductsTable;
