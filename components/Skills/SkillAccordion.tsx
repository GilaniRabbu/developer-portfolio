import { useState } from "react";

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
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-5 font-medium"
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="p-5 bg-[#659477] dark:bg-[#2D2726]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillAccordion;
