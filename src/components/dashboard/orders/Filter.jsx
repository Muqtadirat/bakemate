import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

const Filter = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="border-2 border-grey-200 p-[10px] rounded-lg">
        <button className="flex gap-2 font-medium">
          Sort By <ChevronDown width={16} strokeWidth={3} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[75px] bg-white py-2 flex flex-col gap-4 items-center">
          <DropdownMenu.Item className="border-b-2 border-b-grey-200 w-full text-center py-2 px-[18px]">
            Newest
          </DropdownMenu.Item>
          <DropdownMenu.Item className="border-b-2 border-b-grey-200 w-full text-center py-2 px-[18px]">
            Oldest
          </DropdownMenu.Item>
          <DropdownMenu.Item className="border-b-2 border-b-grey-200 w-full text-center py-2 px-[18px]">
            A-Z
          </DropdownMenu.Item>
          <DropdownMenu.Item className="w-full text-center py-2 px-[18px]">
            Z-A
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Filter;
