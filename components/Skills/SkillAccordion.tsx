import { useState } from "react";
import { LuBadgePlus } from "react-icons/lu";

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
            <p className="text-xl">{item.title}</p>
            <button
              onClick={() => toggleAccordion(index)}
              className="p-2 border rounded-full"
            >
              <LuBadgePlus size="24" />
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
