const CustomersTable = ({ name, email, number, status, address }) => {
  return (
    <div className="grid grid-cols-5 mb-4 py-5 border-b border-b-[#EEEEEE]">
      <p>{name}</p>
      <p>{email}</p>
      <p>{number}</p>
      <p>{address}</p>
      <p className={`${status === "Active" ? "text-[#89C04A]" : "text-[red]"}`}>
        {status}
      </p>
    </div>
  );
};

export default CustomersTable;
