import { useState } from "react";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import { Input, Button } from "src/components/shared";
import { Cross } from "lucide-react";

const ProductInfo = () => {
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    const newRowId = rows.length + 1;
    setRows([...rows, { id: newRowId }]);
  };

  return (
    <div>
      <p className="text-xl mb-4">Product Information</p>

      <Table aria-label="product-info">
        <TableHeader className="bg-grey-100 border-b-2 border-b-grey-200">
          <Column isRowHeader className="px-5 py-2">
            Product
          </Column>
          <Column className="px-5 py-2">N Price</Column>
          <Column className="px-5 py-2">Quantity</Column>
          <Column className="px-5 py-2">Subtotal</Column>
          <Column className="px-5 py-2">Discount</Column>
          <Column className="px-5 py-2">Row Subtotal</Column>
        </TableHeader>
        <TableBody className="border-2 border-grey-300 text-center">
          {rows.map((row) => (
            <Row key={row.id}>
              <Cell className="py-2 max-w-32">
                <Input variant="table" type="text" placeholder="Name" />
              </Cell>
              <Cell className="py-2 max-w-24">
                <Input variant="table" type="number" placeholder="0.0" />
              </Cell>
              <Cell className="py-2 max-w-24">
                <Input variant="table" type="number" placeholder="0" />
              </Cell>
              <Cell className="py-2 max-w-24">
                <Input variant="table" type="number" placeholder="0" />
              </Cell>
              <Cell className="py-2 max-w-24">
                <Input variant="table" type="number" placeholder="0.0" />
              </Cell>
              <Cell className="py-2 max-w-24">
                <Input variant="table" type="number" placeholder="0" />
              </Cell>
            </Row>
          ))}
        </TableBody>
      </Table>

      <Button
        className="bg-[#9F7773] px-2 mt-2 hover:bg-primary-800"
        onClickHandler={addRow}
      >
        <Cross size={10} color="white" fill="white" />
      </Button>

      <p className="font-semibold mt-6">
        Total ({rows.length} products): --
      </p>
    </div>
  );
};

export default ProductInfo;
