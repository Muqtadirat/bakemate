import { useEffect, useState } from "react";
import fetchCustomers from "src/lib/api/fetchCustomers";
import CustomersTable from "./CustomersTable";
import { Pagination } from "src/components/shared";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const customersPerPage = 6;

  useEffect(() => {
    async function fetchCustomersData() {
      try {
        const data = await fetchCustomers();
        if (data) {
          setCustomers(data);
        } else {
          throw new Error("Failed to fetch customers");
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    }
    fetchCustomersData();
  }, []);

  const pageCount = Math.ceil(customers.length / customersPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getPageCustomers = () => {
    const startIndex = currentPage * customersPerPage;
    const endIndex = startIndex + customersPerPage;
    return customers.slice(startIndex, endIndex);
  };

  return (
    <div className="mt-16">
      <h3 className="text-xl font-medium">Customer's List</h3>
      <div className="grid grid-cols-5 pb-5 border-b border-b-[#EEEEEE] mt-12 text-grey-400 font-medium">
        <p>Customer Name</p>
        <p>Email</p>
        <p>Phone Number</p>
        <p>Address</p>
        <p>Status</p>
      </div>

      {getPageCustomers().map((customer) => (
        <CustomersTable
          key={customer.id}
          name={customer.name}
          number={customer.number}
          address={customer.address}
          status={customer.status}
          email={customer.email}
        />
      ))}

      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default CustomersList;
