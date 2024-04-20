import { useState } from "react";
import { X } from "lucide-react";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div className="py-7 px-8 rounded-[10px] max-w-xl h-fit mx-auto absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
          <div className="flex justify-center items-center">
            <p className="font-medium text-grey-600 text-2xl text-center">
              Feedback History{" "}
            </p>

            <div className="absolute right-5 hover:cursor-pointer" onClick={toggleModal}>
              <X />
            </div>
          </div>

          <section className="divide-y">
            <div className="flex flex-col gap-5 py-8">
              <p className="flex">
                <span className="font-semibold mr-2 block">Feedback Date:</span>
                02/04/2024
              </p>
              <p className="flex">
                <span className="font-semibold mr-2 block">Feedback Type:</span>
                Product Feedback
              </p>
              <p className="flex">
                <span className="font-semibold mr-2 block">Feedback:</span>"I
                absolutely loved the chocolate chip cookies I ordered last time!
                They were fresh and delicious. Can't wait to order more!"
              </p>
              <p className="flex">
                <span className="font-semibold mr-2 block">Sentiment:</span>
                Positive
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Feedback;
