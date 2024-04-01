import ReactPaginate from "react-paginate";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={<ChevronLeft />}
      nextLabel={<ChevronRight />}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={"flex gap-3 items-center mt-28"}
      activeClassName={"bg-grey-400 border rounded-sm px-3 py-1 text-white"}
      previousClassName={"px-4 py-2 hover:bg-gray-200"}
      nextClassName={"px-4 py-2  hover:bg-gray-200"}
    />
  );
};

export default Pagination;
