import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

const SkillAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex p-5 items-center justify-between">
            <p className="text-xl">
              <code>{item.title}</code>
            </p>
            <button
              onClick={() => toggleAccordion(index)}
              className="p-2 border rounded-full border-[#221E1E] dark:border-[#EEF2FF]"
            >
              <FaPlus size="20" />
            </button>
          </div>
          {openIndex === index && (
            <div className="px-5 pt-0 pb-5 bg-[#659477] dark:bg-[#2D2726]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillAccordion;
