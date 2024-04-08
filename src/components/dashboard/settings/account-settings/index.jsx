import { useState } from "react";
import { Accordion } from "src/components/shared";
import Personal from "./Personal";
import Business from "./Business";
import Bank from "./Bank";
import Security from "./Security";

const AccountSettings = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-5 mt-8">
      <Accordion
        title="Personal Information"
        subTitle="Information about you"
        isOpen={openAccordion === 1}
        onClickHandler={() => toggleAccordion(1)}
      >
        <Personal />
      </Accordion>
      <Accordion
        title="Business Information"
        subTitle="Information about your business"
        isOpen={openAccordion === 2}
        onClickHandler={() => toggleAccordion(2)}
      >
        <Business />
      </Accordion>
      <Accordion
        title="Bank Information"
        subTitle="Access and edit your bank details"
        isOpen={openAccordion === 3}
        onClickHandler={() => toggleAccordion(3)}
      >
        <Bank />
      </Accordion>
      <Accordion
        title="Security"
        subTitle="Access and edit your password "
        isOpen={openAccordion === 4}
        onClickHandler={() => toggleAccordion(4)}
      >
        <Security />
      </Accordion>
    </div>
  );
};

export default AccountSettings;
