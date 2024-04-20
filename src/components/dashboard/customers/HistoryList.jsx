const HistoryList = ({ product, id, date, time, quantity, price }) => {
  return (
    <div className="grid grid-cols-6 mb-4 py-5 border-b border-b-[#EEEEEE]">
      <p>{product}</p>
      <p>#{id}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{quantity}</p>
      <p>₦{price}</p>
    </div>
  );
};

export default HistoryList;
